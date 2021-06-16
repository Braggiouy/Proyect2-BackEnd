const { checkAuth, checkAdmin } = require('../../utils')

const toolMaintenancesRouter = require('express').Router()

const {
  getAllToolMaintenances,
  getToolMaintenancesByToolId,
  addToolMaintenance,
  updateToolMaintenance,
  deleteToolMaintenance

} = require('../controllers/tool.maintenances.controller')

toolMaintenancesRouter.get('/', checkAuth, checkAdmin, getAllToolMaintenances)
toolMaintenancesRouter.get('/:tool_id', checkAuth, checkAdmin, getToolMaintenancesByToolId)
toolMaintenancesRouter.post('/', checkAuth, checkAdmin, addToolMaintenance)
toolMaintenancesRouter.put('/:id', checkAuth, checkAdmin, updateToolMaintenance)
toolMaintenancesRouter.delete('/:id', checkAuth, checkAdmin, deleteToolMaintenance)

module.exports = {
  toolMaintenancesRouter
}
