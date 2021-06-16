const { checkAuth, checkAdmin } = require('../../utils')
const { checkMachineById } = require('../controllers/machines.controller')
const machineMaintenancesRouter = require('express').Router()

const {
  getAllMachineMaintenances,
  getMachineMaintenancesByMachineId,
  addMachineMaintenance,
  updateMachineMaintenance,
  deleteMachineMaintenance

} = require('../controllers/machine.maintenances.controller')

machineMaintenancesRouter.get('/', checkAuth, checkAdmin, getAllMachineMaintenances)
machineMaintenancesRouter.get('/:machineId', checkAuth, checkAdmin, getMachineMaintenancesByMachineId)
machineMaintenancesRouter.post('/:id', checkAuth, checkAdmin, checkMachineById, addMachineMaintenance)
machineMaintenancesRouter.put('/:id', checkAuth, checkAdmin, updateMachineMaintenance)
machineMaintenancesRouter.delete('/:id', checkAuth, checkAdmin, deleteMachineMaintenance)

module.exports = {
  machineMaintenancesRouter
}
