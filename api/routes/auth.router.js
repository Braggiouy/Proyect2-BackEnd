const authRouter = require('express').Router()

const {
  login
} = require('../controllers/auth.controller')

authRouter.post('/login', login)

module.exports = { authRouter }
