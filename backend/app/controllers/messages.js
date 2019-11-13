const messageModel = require('../models/message')
const groupModel = require('../models/group')
const utils = require('../middleware/utils')
const db = require('../middleware/db')

/********************
 * Public functions *
 ********************/

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
  try {
    const item = await db.createItem(req.body, messageModel)
    if (item) {
      const updateData = { $push: { messages: item._id } }
      db.updateItem(item.group_id, groupModel, updateData)
      res.status(201).json(item)
    }
  } catch (error) {
    utils.handleError(res, error)
  }
}
