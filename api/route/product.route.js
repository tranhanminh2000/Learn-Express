const express = require('express')
const controller = require('../controller/product.controller')
const router = express.Router()


router.get('/', controller.index)
router.get('/:id', controller.find)
router.post('/', controller.create)
module.exports = router;