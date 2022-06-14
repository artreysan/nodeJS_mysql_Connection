const express = require("express");
const path = require('path');//for configure the routes of the operative system
const bodyParser = require('body-parser');

const app = express(); //Instance of express

//settings
app.set('port',process.env.PORT || 3000);// configure the port of EXPRESS
app.set('view engine','ejs'); // configure the template engine
app.set('views', path.join(__dirname,'../app/views')); //place or direction of HTML and CSS


//Middleware
app.use(bodyParser.urlencoded({extended:false})); //?

module.exports = app;