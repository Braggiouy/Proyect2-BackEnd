const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { userModel } = require('../models/users.model')

function login (req, res) {
  userModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) res.json({ err: 'error' })
          if (!result) {
            return res.json({ error: 'Wrong email or password' })
          }
          const userData = { name: user.name, role: user.role }
          const token = jwt.sign(
            userData,
            process.env.SECRET,
            { expiresIn: '8h' })
          return res.json({ token: token, ...userData })
        })
      } else {
        return res.json({ error: 'Wrong email or password' })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ msg: 'Error' })
    })
}

module.exports = {
  login
}
