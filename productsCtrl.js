module.exports = {

  create : function (req, res, next) {
    var dbInstance = req.app.get('db')
    dbInstance.create_product(['name', 'description', 10, 'url']).then(function(product){
      res.send(product)
    })

    // dbInstance.product.save({
    //   name: 'name',
    //      description: 'blah blah',
    //      price: 20,
    //      imageurl: 'url'
    // }).then(function(product){
    //
    // })
  },

  getOne : function (req, res, next) {
    var dbInstance = req.app.get('db')
    dbInstance.read_product().then(function(product){
      res.send(product)
    })
  },

  getAll : function (req, res, next) {
    var dbInstance = req.app.get('db')
    dbInstance.read_products().then(function(){
      res.send(product)
    })
  },

  update : function (req, res, next) {
    var dbInstance = req.app.get('db')
    dbInstance.update_product().then(function(){
      res.send(product)
    })
  },

  delete : function (req, res, next) {
    var dbInstance = req.app.get('db')
    dbInstance.delete_product().then(function(){
      res.send(product)
    })
  }
}
