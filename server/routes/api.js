const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
mongoose.connect(
  'mongodb://atlisaevar:v3g4n80t@cluster0-shard-00-00-xm2lo.mongodb.net:27017,cluster0-shard-00-01-xm2lo.mongodb.net:27017,cluster0-shard-00-02-xm2lo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
);

const Answer = require('../models/answer');

/**
 * GET api listing.
 */
router.get('/', (req, res) => {
  res.send('api works');
});

/**
 * GET Answers.
 * Optional query params:
 * - sourceId: string (filter certain source)
 * - text: string (search term)
 */
router.get('/answers', (req, res) => {
  console.log('GET /answers');
  const query = {};
  if (req.query.sourceId) {
    query['source.id'] = req.query.sourceId;
  }
  if (req.query.text) {
    query['$text'] = { $search: req.query.text };
  }

  Answer.find(query, function(err, answers) {
    if (err) throw err;

    // If text search returns zero results, we do a wildcard search.
    if (answers.length === 0) {
      delete query['$text'];
      query['key'] = new RegExp(req.query.text, 'i');

      Answer.find(query, (err, answers) => {
        if (err) throw err;

        console.log(answers.length + ' answers were fetched with query:');
        console.log(query);
        res.status(200).send(answers);
      });
    } else {
      console.log(answers.length + ' answers were fetched with query:');
      console.log(query);
      res.status(200).send(answers);
    }
  });
});

/**
 * GET Answer by id.
 */
router.get('/answers/:id', (req, res) => {
  console.log('GET /answers/' + req.params.id);
  Answer.findOne({ id: req.params.id }, function(err, answer) {
    if (err) throw err;

    if (answer) {
      console.log(answer);
      res.status(200).send(answer);
    } else {
      res.status(404).send('No answer found with id ' + req.params.id);
    }
  });
});

/**
 * PUT (edit) Answer by id.
 * Body should look like this
 * {
 *    hit: boolean,
 *    share: boolean,
 *    answer?: [ string ],
 * }
 */
router.put('/answers/:id', (req, res) => {
  console.log('PUT /answers/' + req.params.id);
  console.log(req.body);
  if (!req.body) return;

  Answer.findOne({ id: req.params.id }, function(err, answer) {
    if (err) throw err;

    if (answer) {
      const now = new Date();
      if (req.body.hit) answer.stats.hits.push(now);
      if (req.body.share) answer.stats.shares.push(now);
      if (req.body.answer) answer.answer = req.body.answer;

      answer.save(function(err) {
        console.log('Answer successfully saved. After change:');
        console.log(answer);
        res.status(200).send(answer);
      });
    } else {
      res.status(404).send('No answer found with id ' + req.params.id);
    }
  });
});

/**
 * CREATE Answer.
 * Body should look like this:
 * {
 *    id: string,
 *    key: string,
 *    answer: [ string ],
 *    source: {
 *      id: string,
 *      name: string,
 *    },
 * }
 */
router.post('/answers', (req, res) => {
  console.log('POST /answers');
  console.log(req.body);
  if (!req.body) return;

  const newAnswer = new Answer({
    id: req.body.id,
    source: req.body.source,
    key: req.body.key,
    answer: req.body.answer,
  });

  newAnswer.save((err, answer) => {
    if (err) {
      // Duplicate answer id error
      if (err.code === 11000) {
        res.status(409).send(err.message);
      } else {
        throw err;
      }
    } else {
      console.log('Answer with id ' + answer.id + ' was successfully saved.');
      res.status(201).send(answer);
    }
  });
});

/**
 * DELETE Answer.
 * Body should look like this:
 * { id: 'srce-1' }
 */
router.delete('/answers', (req, res) => {
  console.log('DELETE /answers');
  Answer.findOneAndRemove(req.body, function(err, answer) {
    if (err) {
      throw err;
    } else if (!answer) {
      const errorMessage = `No answer found with id ${req.body.id}`;
      console.log(errorMessage);
      res.status(404).send(errorMessage);
    } else {
      console.log('Answer with id ' + answer.id + ' successfully deleted.');
      res.status(200).send('Answer ' + answer.id + ' successfully deleted.');
    }
  });
});

module.exports = router;
