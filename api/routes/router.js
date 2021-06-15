const router = require('express').Router()
const { userRouter } = require('./users.router')
const { authRouter } = require('./auth.router')
const { toolRouter } = require('./tool.router')

router
  .use('/users', userRouter)
  .use('/auth', authRouter)
  .use('/tools', toolRouter)

module.exports = { router }
