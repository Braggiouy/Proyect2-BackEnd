const userRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils')
// const { checkAuth } = require('../../utils')

const {
  getAllUsers,
  addUser
} = require('../controllers/user.controller')

userRouter.get('/', checkAdmin, getAllUsers)
userRouter.post('/', checkAuth, checkAdmin, addUser)

exports.userRouter = userRouter
