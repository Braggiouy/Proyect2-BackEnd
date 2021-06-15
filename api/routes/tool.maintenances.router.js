const { checkAuth, checkAdmin } = require('../../utils')

const toolMaintenancesRouter = require('express').Router()

const {
  getAllToolMaintenances,
  getToolMaintenanceById,
  addToolMaintenance,
  updateToolMaintenance,
  deleteToolMaintenance

} = require('../controllers/tool.maintenances.controller')

toolMaintenancesRouter.get('/', checkAuth, checkAdmin, getAllToolMaintenances)
toolMaintenancesRouter.get('/:id', checkAuth, checkAdmin, getToolMaintenanceById)
toolMaintenancesRouter.post('/', checkAuth, checkAdmin, addToolMaintenance)
toolMaintenancesRouter.put('/:id', checkAuth, checkAdmin, updateToolMaintenance)
toolMaintenancesRouter.delete('/:id', checkAuth, checkAdmin, deleteToolMaintenance)

module.exports = {
  toolMaintenancesRouter
}
