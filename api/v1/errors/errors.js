function logErrors(error, req, res, next) {
  console.log(error);
  next(error);
}
function clientErrorHandler(error, req, res, next) {
  next(error);
}
function errorHandler(error, req, res, next) {
  res.status(error.statusCode).send({ message:error.clientDescription, status: "error", data: null });
  return;
}

module.exports = { logErrors, clientErrorHandler, errorHandler };
