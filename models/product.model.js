var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    img_product: String,
    name_product: String,
    descript_product: String,
    price_product : Number
})

var Product = mongoose.model('Product', productSchema, 'products')

module.exports = Product
