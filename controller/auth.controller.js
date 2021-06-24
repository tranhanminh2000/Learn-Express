// const shortid = require('short-id')
let User = require('../models/user.model')
module.exports.login = function(req , res) {
    res.render('auth/login')
}

module.exports.postLogin = function(req, res){
    User.find()
        .then(function(users){
            var name = req.body.name;
            var phone = req.body.phone;
            var account = users.find((ele) => ele.name === name);

            var err=[];
            if(!name){
                err.push('Emai is required')
            }
            if(!phone){
                err.push('Password is required')
            }
            if(err.length){
                res.render('auth/login', {
                    errors: err,
                    em: name
                })
                return;
            }
            if(!account){
                err.push('Email does not exist ')
                res.render('auth/login', {
                    errors: err,
                    em: name
                })
                return;
            }
            if(account.phone !== phone){
                err.push('Wrong password')
                res.render('auth/login', {
                    errors: err,
                    em: name
                })
                return;
            }
            res.cookie('userId', account.id, {
                signed: true
            })

            res.redirect('/users')
            }
        )
}
