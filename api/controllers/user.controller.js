const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userModel } = require('../models/users.model')

function addUser (req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)

  userModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd,
      role: req.body.role,
      address: req.body.address,
      phone: req.body.phone,
      others: req.body.others
    })
    .then(user => {
      const userData = { name: user.name, role: user.role }
      const token = jwt.sign(
        userData,
        process.env.SECRET,
        { expiresIn: '8h' })
      return res.json({ token: token, ...userData })
    })
    .catch(err => {
      res.status(500).json({ msg: 'Error creating user', err })
    })
}

function getAllUsers (req, res) {
  userModel
    .find(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err =>
      res.status(500).json({ err: 'Error' }, err)
    )
}

function getUserByName (req, res) {
  userModel
    .find({ name: { $regex: `.*${req.params.name}.*`, $options: 'i' } })
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err =>
      res.status(500).json({ err: 'Error' }, err)
    )
}

function deleteUser (req, res) {
  userModel
    .findOneAndDelete({ email: req.params.email })
    .then(user => {
      res.status(200).send(user.name + ' has been deleted')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error deleting user' }, err)
    })
}

function updateUser (req, res) {
  userModel
    .findOneAndUpdate({ email: req.params.email }, req.body, { new: true })
    .then(user => {
      console.log(req.params.email)
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ err: 'Error updating user' }, err)
    })
}

module.exports = {
  addUser,
  getAllUsers,
  getUserByName,
  deleteUser,
  updateUser
}
