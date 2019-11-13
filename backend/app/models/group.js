const mongoose = require('mongoose')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')

const GroupSchema = new mongoose.Schema(
  {
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

GroupSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Group', GroupSchema)
