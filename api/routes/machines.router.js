const machineRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils')

const {
  addMachine,
  getAllMachines,
  getMachineById,
  getMachineByStatus
} = require('../controllers/machines.controlers')

machineRouter.get('/', checkAuth, checkAdmin, getAllMachines)
machineRouter.get('/:busy', checkAuth, checkAdmin, getMachineByStatus)
machineRouter.get('/:id', checkAuth, checkAdmin, getMachineById)
machineRouter.post('/', checkAuth, checkAdmin, addMachine)

module.exports = { machineRouter }
