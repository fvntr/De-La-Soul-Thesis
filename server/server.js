"use strict";

// Starts server and connect to db. Middleware handles routing
var express = require('express');

//database connection will happen here once it exists 

var app = express();


// Middleware takes app object returned from express
// and express method
require('./config/middleware.js')(app, express);

module.exports = app;