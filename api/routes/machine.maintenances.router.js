const { checkAuth, checkAdmin } = require('../../utils/auth')
const { checkMachineById } = require('../controllers/machines.controller')
const machineMaintenancesRouter = require('express').Router()

const {
  getAllMachineMaintenances,
  getMachineMaintenancesByMachineId,
  addMachineMaintenance,
  updateMachineMaintenance,
  deleteMachineMaintenance,
  updateMachineMaintenanceMechanic,
  getMechanicMaintenaceListMachines

} = require('../controllers/machine.maintenances.controller')

machineMaintenancesRouter.get('/', checkAuth, checkAdmin, getAllMachineMaintenances)
machineMaintenancesRouter.get('/:machineId', checkAuth, checkAdmin, getMachineMaintenancesByMachineId)
machineMaintenancesRouter.get('/userlist/:userId', checkAuth, getMechanicMaintenaceListMachines)
machineMaintenancesRouter.post('/:id', checkAuth, checkAdmin, checkMachineById, addMachineMaintenance)
machineMaintenancesRouter.put('/:id', checkAuth, checkAdmin, updateMachineMaintenance)
machineMaintenancesRouter.put('/mymaintenaces/:id', checkAuth, updateMachineMaintenanceMechanic)
machineMaintenancesRouter.delete('/:id', checkAuth, checkAdmin, deleteMachineMaintenance)

module.exports = {
  machineMaintenancesRouter
}
