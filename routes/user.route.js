const express = require('express')

var controller = require('../controller/user.controller')
var validate = require('../validate/valid')
var authMiddle = require('../middleware/auth.midleware')
var multer = require('multer')
var upload = multer({dest: './public/uploads/'})

const router = express.Router()


router.get('/', authMiddle.requireAuth, controller.index)

router.get('/search' , authMiddle.requireAuth, controller.search)

router.get('/create' , authMiddle.requireAuth, controller.create)

router.post('/create' , upload.single('avatar') ,authMiddle.requireAuth, validate ,controller.postCreate)
// router.get('/cookie', function(req, res, next){
//     res.cookie('user-id', 1234)
//     res.send('hello')
// });
    
router.get('/:id', controller.view)


module.exports = router;