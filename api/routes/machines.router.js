const machineRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils/auth')

const {
  addMachine,
  getAllMachines,
  getMachineById,
  getMachineByStatus,
  updateMachine,
  deleteMchine
} = require('../controllers/machines.controller')

machineRouter.get('/', checkAuth, checkAdmin, getAllMachines)
machineRouter.get('/:busy', checkAuth, checkAdmin, getMachineByStatus)
machineRouter.get('/:id', checkAuth, checkAdmin, getMachineById)
machineRouter.post('/', checkAuth, checkAdmin, addMachine)
machineRouter.put('/:id', checkAuth, checkAdmin, updateMachine)
machineRouter.delete('/:id', checkAuth, checkAdmin, deleteMchine)

module.exports = { machineRouter }
