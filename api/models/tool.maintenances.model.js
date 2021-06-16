const mongoose = require('mongoose')
const { replacementsSchema } = require('./replacements.model')

const toolMaintenancesSchema = new mongoose.Schema({
  toolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tools'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    default: '0'
  },
  maintenanceDate: {
    type: Date
  },
  replacement: [replacementsSchema],

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

const toolMaintenancesModel = mongoose.model('toolMaintenances', toolMaintenancesSchema)

module.exports = {
  toolMaintenancesModel
}
