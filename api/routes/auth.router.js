const authRouter = require('express').Router()
// const { checkAuth } = require('../../utils')

const {
  login
} = require('../controllers/auth.controller')

authRouter.post('/', login)

module.exports = { authRouter }
