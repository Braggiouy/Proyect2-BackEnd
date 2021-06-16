const mongoose = require('mongoose')

const machineSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Please enter the type of the machine or vehicle']
  },
  brand: {
    type: String,
    required: [true, 'Please enter the brand of the machine or vehicle']
  },
  model: {
    type: String,
    required: [true, 'Please enter the model of the machine or vehicle']
  },
  registrationTag: {
    type: String,
    required: [true, 'Please enter a registration tag'],
    unique: [true, 'This registration tag alrady exist']
  },
  serialNumber: {
    type: String,
    required: [true, 'Please enter  a serial number'],
    unique: [true, 'This serial number already exist']
  },
  itvExpiringDate: {
    type: Date,
    required: [true, 'Please enter the date when I.T.V. expires']
  },
  insurancePolicy: {
    type: String,
    required: [true, 'please type the insurace policy number'],
    unique: [true, 'Insurance number already exist']
  },
  insuranceExpiringDate: {
    type: Date,
    required: [true, 'Please enter the insuurance expiring date']
  },
  tachograph: {
    type: Date,
    required: [true, 'Please enter the tachograph date']
  },
  acquisitionDate: {
    type: Date,
    required: [true, 'Please enter the acquisition date']
  },
  busy: {
    type: Boolean,
    required: [true, 'please enter the current state of the machine or vehicle'],
    default: false
  },
  addressBuildingSite: {
    type: String,
    required: [true, 'Please enter the location of the machine or vehicle']
  }
})

const machineModel = mongoose.model('machines', machineSchema)

module.exports = {
  machineModel
}
