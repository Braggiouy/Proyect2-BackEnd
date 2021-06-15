const router = require('express').Router()
const { userRouter } = require('./users.router')
const { authRouter } = require('./auth.router')
const { toolMaintenancesRouter } = require('./tool.maintenances.router')
router
  .use('/users', userRouter)
  .use('/auth', authRouter)
  .use('/toolmaintenances', toolMaintenancesRouter)

module.exports = { router }
