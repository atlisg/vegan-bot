#### GET all answers

With header info
`curl -i http://localhost:3000/api/answers`
Prettified
`curl http://localhost:3000/api/answers | python -m json.tool`

#### GET answer by id

With header info
`curl -i http://localhost:3000/api/answers/vcom-1`
Prettified
`curl http://localhost:3000/api/answers/vcom-1 | python -m json.tool`

#### GET answers with query

With header info
`curl -i http://localhost:3000/api/answers\?sourceId\=vsid\&text\=protein`
Prettified
`curl http://localhost:3000/api/answers\?sourceId\=vsid\&text\=protein | python -m json.tool`

#### CREATE answer

With header info
`curl -i -H "Content-Type: application/json" -X POST -d '{"id":"test-2","source":"Mock Source","key":"Why is that?","answer":["Its simple really.","Because."]}' http://localhost:3000/api/answers`
Prettified
`curl -H "Content-Type: application/json" -X POST -d '{"id":"test-2","source":"Mock Source","key":"Why is that?","answer":["Its simple really.","Because."]}' http://localhost:3000/api/answers | python -m json.tool`

#### DELETE answer

With header info
`curl -i -H "Content-Type: application/json" -X DELETE -d '{"id":"test-2"}' http://localhost:3000/api/answers`
Prettified
`curl -H "Content-Type: application/json" -X DELETE -d '{"id":"test-2"}' http://localhost:3000/api/answers | python -m json.tool`

#### PUT answer

With header info
`curl -i -H "Content-Type: application/json" -X PUT -d '{"hit":true,"share":false}' http://localhost:3000/api/answers/vcom-7`
Prettified
`curl -H "Content-Type: application/json" -X PUT -d '{"hit":"true","share":"false"}' http://localhost:3000/api/answers/vcom-7 | python -m json.tool`
