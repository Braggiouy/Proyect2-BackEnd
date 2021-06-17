
const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({

  type: {
    type: String,
    required: [true, 'Plesase enter a type']
  },
  brand: {
    type: String,
    required: [true, 'Please enter a brand']
  },
  model: {
    type: String,
    required: [true, 'Please enter a model']
  },
  serialNumber: {
    type: String,
    required: [true, 'Please enter a serial number'],
    unique: [true, 'Serial number already exist']
  },
  acquisitionDate: {
    type: Date,
    required: [true, 'Please enter a date']
  },
  provider: {
    type: String,
    required: [true, 'Please enter a provider']
  },
  busy: {
    type: Boolean,
    required: true,
    default: false
  },
  addressBuildingSite: {
    type: String,
    required: [true, 'Please enter a address']
  }
})

const toolModel = mongoose.model('tools', toolSchema)

module.exports = {
  toolModel
}
