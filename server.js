import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import passport from 'passport';
import User from './models/user';
import cookieParser from 'cookie-parser';
//import users from './controllers/users';
//import session from 'express-session'
//import LocalStrategy from 'passport-local';
var mongo = require('mongodb');
var path = require('path');
var session = require('express-session');
var LocalStrategy   = require('passport-local').Strategy;
import i18n from 'i18n-2';

const app = express();

app.use(cookieParser());

app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: false,
    saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
//_______________________________________________
    //kovakoodattu testin ajaksi
// users = [{"_id":111, "username":"moi", "password":"moi"}];




passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




//app.use(bodyParser.urlencoded({ extended: false }));

i18n.expressBind(app, {
    locales: ['en', 'fi', 'sv', 'ru'],
    cookieName: 'locale',
    defaultLocale: 'en',
    devMode: true
});

app.use(function(req, res, next) {
    req.i18n.setLocaleFromCookie();
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false,
limit: '15mb' }), function (error, req, res, next) {
    if (error instanceof Error) {
        return res.send('500', { error: error });
    } else {
        next();
    }
});
 
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
 
    res.sendStatus(401);
};
//_________________________________________________
//This file connects our server to mongoDB and uses the router we have created
mongoose.connect('mongodb://localhost/kohteet');
// Initialize http server
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected to MongoDB!'); 
});

//__________________________________________________



// Logger outputting all requests in to the console
app.use(morgan('combined'));

// Use v1 as prefix for your API endpoints
app.use('/v1', router);

// Serve javascript files from js subdirectory
app.use("/js", express.static(__dirname + "/assets/js"));

// Serve images from img subdirectory
app.use("/img", express.static(__dirname + "/assets/img"));

// Serve css files from css subdirectory
app.use("/css", express.static(__dirname + "/assets/css"));


app.set('view engine', 'pug');
// Launches server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
