var express = require('express')
var massive = require('massive')
var bodyParser = require('body-parser')
var controller = require('./productsCtrl');
var app = express()

massive('postgres://localhost:5432/sql_massive_node')
.then(db => {
  app.set('db', db);
  console.log(db.product)
  db.create_product_table().then(table => {
    console.log('Created table: ', table);
  }, (err) => {
    console.log('Table create error: ', err);
  });
});

app.get('/', controller.create)
app.listen(3000,function(){
  console.log("I am listening on port 3000")
})
