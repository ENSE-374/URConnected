const controller = require('../controllers/groups')
const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')

/*
 * Group routes
 */

/*
 * Get items route
 */
router.get('/', trimRequest.all, controller.getItems)

/*
 * Get item route
 */
router.get('/:id', trimRequest.all, controller.getItem)

module.exports = router
