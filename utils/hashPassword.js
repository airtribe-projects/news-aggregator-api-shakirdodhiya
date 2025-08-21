const bcrypt = require('bcrypt');

exports.hashPassword = async (password_string) => {
  const hashedPassword = await bcrypt.hash(password_string, 11);

  return hashedPassword;
}