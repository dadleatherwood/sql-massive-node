var express = require('express')
var massive = require('massive')
var bodyParser = require('body-parser')
var productsCtrl = require('./productsCtrl');
var app = express()

app.use(bodyParser.json())

massive('postgres://localhost:5432/sql_massive_node')
.then(db => {
  app.set('db', db);
  db.create_product_table().then(function(table) {
    console.log('Created table: ', table);
  }, (err) => {
    console.log('Table create error: ', err);
  });
});

//endpoints

app.get('/api/product/:productId', productsCtrl.getOne)
app.get('/api/product', productsCtrl.getAll)
app.put('/api/product/:productId', productsCtrl.update)
app.post('/api/product', productsCtrl.create)
app.delete('/api/product/:productId', productsCtrl.delete)

app.listen(3000,function(){
  console.log("I am listening on port 3000")
})
