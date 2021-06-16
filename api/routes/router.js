const router = require('express').Router()
const { userRouter } = require('./users.router')
const { authRouter } = require('./auth.router')
const { toolRouter } = require('./tool.router')
const { toolMaintenancesRouter } = require('./tool.maintenances.router')
const { machineRouter } = require('./machines.router')

router
  .use('/users', userRouter)
  .use('/auth', authRouter)
  .use('/tools', toolRouter)
  .use('/toolmaintenances', toolMaintenancesRouter)
  .use('/machines', machineRouter)

module.exports = { router }
