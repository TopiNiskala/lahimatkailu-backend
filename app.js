var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 
var session = require('express-session');

app.use(session({secret:"BigSecret123",resave:false,saveUninitialized:true}));