const User = require("../../model/user");

async function listUsers(req, res) {


  const users = User.find();

  return res.send("lista de usuarios");
}

module.exports = listUsers;