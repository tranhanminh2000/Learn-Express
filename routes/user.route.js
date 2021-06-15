const express = require('express')

var controller = require('../controller/user.controller')
var validate = require('../validate/valid')

const router = express.Router()


router.get('/', controller.index)

router.get('/search' , controller.search)

router.get('/create' , controller.create)

router.post('/create' , validate ,controller.postCreate)

router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 1234)
    res.send('hello')
});
    
router.get('/:id', controller.view)


module.exports = router;