const { checkAuth, checkAdmin } = require('../../utils/auth')
const { checkToolById } = require('../controllers/tool.controller')
const toolMaintenancesRouter = require('express').Router()

const {
  getAllToolMaintenances,
  getToolMaintenancesByToolId,
  addToolMaintenance,
  updateToolMaintenance,
  deleteToolMaintenance,
  getMechanicMaintenaceList,
  updateToolMaintenanceMechanic
} = require('../controllers/tool.maintenances.controller')

toolMaintenancesRouter.get('/', checkAuth, checkAdmin, getAllToolMaintenances)
toolMaintenancesRouter.get('/:toolId', checkAuth, checkAdmin, getToolMaintenancesByToolId)
toolMaintenancesRouter.get('/userlist/:userId', checkAuth, getMechanicMaintenaceList)
toolMaintenancesRouter.post('/:id', checkAuth, checkAdmin, checkToolById, addToolMaintenance)
toolMaintenancesRouter.put('/:id', checkAuth, checkAdmin, updateToolMaintenance)
toolMaintenancesRouter.delete('/:id', checkAuth, checkAdmin, deleteToolMaintenance)
toolMaintenancesRouter.put('/mymaintenaces/:id', checkAuth, updateToolMaintenanceMechanic)

module.exports = {
  toolMaintenancesRouter
}
