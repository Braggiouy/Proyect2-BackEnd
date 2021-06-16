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
        if (user) {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'Token not valid ja' })
        }
      })
  })
}

function checkAdmin (req, res, next) {
  if (res.locals.user.role === 'admin') {
    next()
  } else {
    res.status(403).json({ error: 'You are not an admin, please contact with one' })
  }
}

module.exports = {
  checkAuth,
  checkAdmin
}
