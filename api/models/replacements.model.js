const mongoose = require('mongoose')

const replacementsSchema = new mongoose.Schema({
  replacement: {
    type: String,
    default: 'Pending',
    required: [true, 'Please type a name']
  },
  original: {
    type: Boolean,
    default: false,
    required: [true, 'Please set the piece status']

  },
  alternativeBrand: {
    type: String,
    default: 'Pending',
    required: [true, 'Please set the brand']
  },
  new: {
    type: Boolean,
    default: false,
    required: [true, 'Please set the origin of the replacement']
  },
  serialNumber: {
    type: String,
    default: 'Pending',
    required: [true, 'Please set the serial number'],
    unique: true
  }
})

module.exports = {
  replacementsSchema
}
