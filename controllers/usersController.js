const usersModel = require('../models/usersModel');
const { hashPassword } = require('../utils/hashPassword');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (user) => {
  let user_obj = {...user};

  user_obj.password = await hashPassword(user.password);

  return await usersModel.create(user_obj);
}

exports.login = async (email, password) => {
  const user = await usersModel.findOne({ email : email });

  if(!user){
    throw('User not found')
  }

  const compare = await bcrypt.compare(password, user.password);

  if(!compare){
    throw("Invalid Password");
  }

  const token = jwt.sign({ user_id : user._id }, process.env.SECRET_KEY, { expiresIn : '24h' })

  return token;
}

exports.getPreferences = (user) => {
  return user.preferences;
}

exports.updatePreferences = async (user_id, preferences) => {
  return await usersModel.updateOne(
    { _id : user_id },
    {
      $set : {
        preferences : preferences
      }
    }
  )
}