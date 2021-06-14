const jwt = require('jsonwebtoken')
const { userModel } = require('../api/models/users.model')

function checkAuth (req, res, next) {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) {
      res.status(403).json({ error: 'Token not valid' })
    }
    userModel
      .findOne(
        {
          email: token.email
        }
      )
      .then(user => {
        if (!user) {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'Token not valid' })
        }
      })
  })
}

function checkAdmin (req, res, next) {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) {
      res.status(403).json({ error: 'You are not an admin, please contact with one' })
    }
    userModel
      .findOne(
        {
          role: token.role
        }
      )
      .then(user => {
        if (user.role === 'admin') {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'You are not an admin, please contact with one' })
        }
      })
  })
}

module.exports = {
  checkAuth,
  checkAdmin
}
