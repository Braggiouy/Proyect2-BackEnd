const { checkAuth, checkAdmin } = require('../../utils')
const { checkToolById } = require('../controllers/tool.controller')
const toolMaintenancesRouter = require('express').Router()

const {
  getAllToolMaintenances,
  getToolMaintenancesByToolId,
  addToolMaintenance,
  updateToolMaintenance,
  deleteToolMaintenance
} = require('../controllers/tool.maintenances.controller')

toolMaintenancesRouter.get('/', checkAuth, checkAdmin, getAllToolMaintenances)
toolMaintenancesRouter.get('/:toolId', checkAuth, checkAdmin, getToolMaintenancesByToolId)
toolMaintenancesRouter.post('/:id', checkAuth, checkAdmin, checkToolById, addToolMaintenance)
toolMaintenancesRouter.put('/:id', checkAuth, checkAdmin, updateToolMaintenance)
toolMaintenancesRouter.delete('/:id', checkAuth, checkAdmin, deleteToolMaintenance)

module.exports = {
  toolMaintenancesRouter
}
