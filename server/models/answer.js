const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  id: { type: String, required: true, unique: true },
  source: {
    name: { type: String, required: true },
    id: { type: String, required: true },
  },
  key: { type: String, required: true },
  answer: { type: [String], required: true },
  stats: {
    hits: [Date],
    shares: [Date],
  },
  created_at: Date,
  updated_at: Date,
});

// On every save, add the date
answerSchema.pre('save', function(next) {
  this.updated_at = new Date();
  // if created_at doesn't exist, add to that field
  if (!this.created_at) this.created_at = this.updated_at;

  next();
});

// Make the `key` field searchable
answerSchema.index({ key: 'text' });

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
