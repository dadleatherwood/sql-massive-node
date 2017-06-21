var express = require('express')
var massive = require('massive')
var bodyParser = require('body-parser')

var app = express()

massive('postgres://localhost:5432/sql_massive_node')
.then(function(db){
  app.set('db',db)
})

app.listen(3000,function(){
  console.log("I am listening on port 3000")
})
