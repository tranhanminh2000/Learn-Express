let User = require('../models/user.model')
module.exports.requireAuth = function(req, res, next){
    if(!req.signedCookies.userId){
        res.redirect('/auth/login')
        return
    }

    User.find().then(function(users){
        var account = users.find((ele)=> ele.id == req.signedCookies.userId)

        if(!account){
            res.redirect('/auth/login')
            return
        }
    
        res.locals.account = account
        next()
    })
   
}