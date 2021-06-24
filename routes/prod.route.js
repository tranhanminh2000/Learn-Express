const express = require('express')

var controller = require('../controller/prod.controller')
// var validate = require('../validate/valid')

const router = express.Router()


router.get('', controller.index)

module.exports = router;