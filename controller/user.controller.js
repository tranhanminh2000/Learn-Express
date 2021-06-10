const shortid = require('short-id')
let users = [
    { id: 1, name: 'Minh'},
    { id: 2, name: 'CHAU'},
    { id: 3, name: 'Anh'}, 
    { id: 4, name: 'Thu'},
    { id: 5, name: 'Hue'}
]
module.exports.index = function(req , res) {
    res.render('users/index', { 
        users: users
    })
}

module.exports.search = function(req, res){
    let q = req.query.q;
    let matchFinding = users.filter(function (user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchFinding
    })
}

module.exports.create = function(req, res){
    res.render('users/create')
}

module.exports.postCreate = function (req, res){
    req.body.id = shortid.generate()    
    users.push(req.body)
    console.log(req.body)
    res.redirect('/users')
}

module.exports.view = function(req, res){
    let id = req.params.id;

    var user = users.find((element) => {
        return element.id == id;
    })

    res.render('users/view', {
        user
    })
}