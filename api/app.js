const express = require("express");
const app = express();
const v1Services = require("./v1/services");

app.use("/api/v1", v1Services);

module.exports = app;