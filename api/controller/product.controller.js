const { query } = require('express');
var Product = require('../../models/product.model')

module.exports.index = async function(req, res, next){
    var products = await Product.find()
    res.json(products)
}
module.exports.find = async function(req, res, next){
    var query = req.params.id
    console.log(query)
    var product = await Product.findOne({'_id' : query})
    res.json(product)
}
module.exports.create = async function(req, res, next){
    var product = await Product.create(req.body)
    res.json(product)
}
    // let q = parseInt(req.query.page) || 1; 
    // let n = q; 
    // let x = 4 ; //Quantity of product expected to display on a Page

    // let start = (n-1)*x;
    // let end = (n-1)*x+x;
    // let productsOnPage = dbProd.products.slice(start,end);

    // let Pages = Math.ceil((dbProd.products.length)/x) 
    // console.log(req.query.page)
    // console.log(q<1)
    // if(q>Pages || q<1){
    //     res.render('products/index', {
    //         message : 'Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn'
    //     }) 
    //     return;
    // }

    // res.render('products/index', {
    //     products : productsOnPage,
    //     pagesLength : Pages,
    //     query: q
    // }) 
