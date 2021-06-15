const machineRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils')

const {
  addMachine
} = require('../controllers/machines.controlers')

machineRouter.post('/', checkAuth, checkAdmin, addMachine)

module.exports = { machineRouter }
