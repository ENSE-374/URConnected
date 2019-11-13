const mongoose = require('mongoose')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    group_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

MessageSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Message', MessageSchema)
