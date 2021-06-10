const express = require('express')

var controller = require('../controller/user.controller')
const router = express.Router()


router.get('/', controller.index)

router.get('/search' , controller.search)

router.get('/create' , controller.create)

router.post('/create' , controller.postCreate)

router.get('/:id', controller.view)
module.exports = router;