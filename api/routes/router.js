const router = require('express').Router()
const { userRouter } = require('./users.router')
const { authRouter } = require('./auth.router')
const { machineRouter } = require('./machines.router')

router
  .use('/users', userRouter)
  .use('/auth', authRouter)
  .use('/machines', machineRouter)

module.exports = { router }
