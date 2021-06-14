const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userModel } = require('../models/users.model')

function addUser (req, res) {
  console.log('chous')
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
  console.log(hashedPwd)
  console.log(req.body)

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
      res.status(500).json({ msg: 'Error111111', err })
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

module.exports = {
  addUser,
  getAllUsers
}
