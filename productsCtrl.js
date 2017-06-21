module.exports = {

  create : function (req, res, next) {
    var dbInstance = req.app.get('db')
    var name = req.body.name
    var description = req.body.description
    var price = req.body.price
    var imageUrl = req.body.imageurl
    dbInstance.create_product([name, description, price, imageUrl]).then(function(product){
      res.send(product)
    })

    // dbInstance.product.save({
    //      name: name,
    //      description: description,
    //      price: price,
    //      imageurl: imageUrl
    // }).then(function(product){
    //      res.send(product)
    // })
  },

  getOne : function (req, res, next) {
    var dbInstance = req.app.get('db')
    var id = req.params.productId
    dbInstance.read_product(id).then(function(product){
      res.send(product)
    })
  },

  getAll : function (req, res, next) {
    var dbInstance = req.app.get('db')
    dbInstance.read_products().then(function(product){
      res.send(product)
    })
  },

  update : function (req, res, next) {
    var dbInstance = req.app.get('db')
    var id = req.params.productId
    var description = req.body.description
    dbInstance.update_product([id, description]).then(function(product){
      res.send(product)
    })
  },

  delete : function (req, res, next) {
    var dbInstance = req.app.get('db')
    var id = req.params.productId
    dbInstance.delete_product(id).then(function(product){
      res.send(product)
    })
  }
}
