const User = require("../../model/user");

async function listUsers(req, res, next) {
  try {
    const users = await User.find();
    if (!users.length) {
      next({
        statusCode: 401,
        type: "Database",
        clientDescription: "Error del usuario"
      });
    }
    const response = { message:"List users", status: "OK", data: users };
    res.send(response);
  } catch (error) {
    next({
      statusCode: 500,
      type: "List Users",
      originalError: error,
      clientDescription: "There was an error trying to list users"
    });
  }
}

module.exports = listUsers;
