const express = require("express");
const app = express();
const {logErrors, clientErrorHandler, errorHandler }= require('./v1/errors/errors')
const v1Services = require("./v1/services");

app.use("/api/v1", v1Services);

// app.use(function(err, req, res, next) {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     next();
//   });

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

module.exports = app;