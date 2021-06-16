const mongoose = require('mongoose')
const { replacementsSchema } = require('./replacements.model')

const machineMaintenancesSchema = new mongoose.Schema({
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'machines'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  maintenanceDate: {
    type: Date
  },
  replacement: [replacementsSchema],

  workingHours: {
    type: Number
  },
  kms: {
    type: Number
  },
  totalCost: {
    type: Number
  },
  priority: {
    type: String,
    required: [true, 'Priority not valid'],
    enum: ['low', 'medium', 'high'],
    default: 'high'
  },
  status: {
    type: String,
    required: [true, 'Status not defined'],
    enum: ['To do', 'In progress', 'Done'],
    default: 'To do'
  }
})

const machineMaintenancesModel = mongoose.model('machineMaintenances', machineMaintenancesSchema)

module.exports = {
  machineMaintenancesModel
}
