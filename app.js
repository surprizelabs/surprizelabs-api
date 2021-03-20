require('dotenv').config();
const cookieParser = require("cookie-parser");
const express = require('express');

const app = express();

app.use(express.static('static'));

app.use(cookieParser());

module.exports = app;

require("./routes.js");


