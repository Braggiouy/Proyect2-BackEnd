const userRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils/auth')

const {
  getAllUsers,
  addUser,
  getUserByName,
  deleteUser,
  updateUser
} = require('../controllers/user.controller')

userRouter.get('/', checkAuth, checkAdmin, getAllUsers)
userRouter.get('/:name', checkAuth, checkAdmin, getUserByName)
userRouter.post('/', /*checkAuth, checkAdmin,*/ addUser)
userRouter.put('/:email', checkAuth, checkAdmin, updateUser)
userRouter.delete('/:email', checkAuth, checkAdmin, deleteUser)

module.exports = { userRouter }
