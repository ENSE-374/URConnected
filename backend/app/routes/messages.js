const controller = require('../controllers/messages')
const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')

/*
 * Messages routes
 */

/*
 * Create new item route
 */
router.post('/', trimRequest.all, controller.createItem)

module.exports = router
