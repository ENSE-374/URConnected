const mongoose = require('mongoose')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')

const TagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

TagSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Tag', TagSchema)
