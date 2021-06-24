const { query } = require('express');
var Product = require('../models/product.model')

module.exports.index = function(req, res, next){
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
    Product.find().then(function(products){
        res.render('products/index', {
            products: products
        })
    })
}