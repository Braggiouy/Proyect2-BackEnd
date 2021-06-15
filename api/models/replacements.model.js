const mongoose = require('mongoose')

const replacementsSchema = new mongoose.Schema({
  replacement: {
    type: String,
    required: [true, 'Please type a name']
  },
  original: {
    type: Boolean
  },
  alternativeBrand: {
    type: String
  },
  new: {
    type: Boolean
  },
  serialNumber: {
    type: String
  }
})

module.exports = {
  replacementsSchema
}
