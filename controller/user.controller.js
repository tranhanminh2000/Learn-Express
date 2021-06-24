// const shortid = require('short-id')
let User = require('../models/user.model')


module.exports.index = function(req , res) {
    User.find()
        .then(function(users){
        res.render('users/index', { 
            users: users
        })
    })
    // console.log(req.cookies)
}

module.exports.search = function(req, res){
    User.find()
        .then(function(users){
        let q = req.query.q;
        let matchFinding = users.filter(function (user){
            return (user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) || (user.phone.indexOf(q) !==-1) ;
        })
        res.render('users/index', {
            users: matchFinding
        })
    })
}

module.exports.create = function(req, res){
    res.render('users/create')
}

module.exports.postCreate = function (req, res){
    req.body.avatar = req.file.path.split('\\').slice(1).join('/')
    var user = new User({name: req.body.name, phone: req.body.phone, avatar: req.body.avatar})
    
    user.save(function(err, user){
        if(err) return console.error(err);
        console.log('insert success');
    })
    res.redirect('/users')
}
module.exports.view = function(req, res){
    User.find()
        .then(function(users){
            let id = req.params.id;
            var user = users.find((element) => {
                return element.id === id;
            })
            res.render('users/view', {
                user: user
            })
        })
}