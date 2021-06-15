
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Plesase type a name']
  },
  email: {
    type: String,
    required: [true, 'Please enter a valid E-mail'],
    unique: [true, 'E-mail already exist']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password']
  },
  role: {
    type: String,
    required: [true, 'Not a valid rol'],
    enum: ['mechanic', 'admin'],
    default: 'mechanic'
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
  others: {
    type: String
  }
})

const userModel = mongoose.model('users', userSchema)

module.exports = {
  userModel
}
