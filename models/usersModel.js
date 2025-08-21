const mongoose = require('mongoose');

const usersModel = mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    unique : true,
    required : true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] // regex validation for email
  },
  password : {
    type : String,
    required : true,
    minlength: [8, 'Password must be at least 8 characters long'] // built-in minlength
  },
  preferences : {
    type : [String],
    default : []
  }
})

module.exports = mongoose.model('Users', usersModel)
