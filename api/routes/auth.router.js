const authRouter = require('express').Router()
// const { checkAuth } = require('../../utils')

const {
  login
} = require('../controllers/auth.controller')

authRouter.post('/login', login)

module.exports = { authRouter }
