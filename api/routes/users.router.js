const userRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils')
// const { checkAuth } = require('../../utils')

const {
  getAllUsers,
  addUser,
  getUserByName
} = require('../controllers/user.controller')

userRouter.get('/', checkAdmin, getAllUsers)
userRouter.get('/:name', /*checkAdmin*/ getUserByName)
userRouter.post('/', checkAuth, checkAdmin, addUser)

exports.userRouter = userRouter
