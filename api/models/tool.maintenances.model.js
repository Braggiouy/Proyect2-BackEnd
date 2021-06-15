const mongoose = require('mongoose')
const { replacementsModel } = require('./replacements.model')

const toolMaintenancesSchema = new mongoose.Schema({
  toolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tools'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  maintenanceDate: {
    type: Date
  },
  maintenance: {
    type: [replacementsModel]
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

const toolMaintenancesModel = mongoose.model('toolMaintenances', toolMaintenancesSchema)

module.exports = {
  toolMaintenancesModel
}
