const shortid = require('short-id')
let users = [
    { id: 1, name: 'Minh', phone: '19006099'},
    { id: 2, name: 'CHAU', phone: '12708333'},
    { id: 3, name: 'Anh',  phone: '67622233'}
]
module.exports.index = function(req , res) {
    res.render('users/index', { 
        users: users
    })
}

module.exports.search = function(req, res){
    let q = req.query.q;
    let matchFinding = users.filter(function (user){
        return (user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) || (user.phone.indexOf(q) !==-1) ;
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
    console.log(res.locals)
    res.redirect('/users')
}

module.exports.view = function(req, res){
    let id = req.params.id;
    console.log(id);
    var user = users.find((element) => {
        return element.id == id;
    })

    res.render('users/view', {
        user
    })
}