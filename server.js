import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import passport from 'passport';
import user from './models/user';
//import session from 'express-session'
//import LocalStrategy from 'passport-local';

var path = require('path');
var session = require('express-session');
var LocalStrategy   = require('passport-local').Strategy,
//_______________________________________________
    //kovakoodattu testin ajaksi
 users = [{"id":111, "username":"amy", "password":"amyspassword"}];

     //Serialize
passport.serializeUser(function (user, done) {
    done(null, users[0].id);
});
passport.deserializeUser(function (id, done) {
    done(null, users[0]);
});

// passport local strategy for local-login, local refers to this app
passport.use('local-login', new LocalStrategy(
    function (username, password, done) {
        if (username === users[0].username && password === users[0].password) {
            return done(null, users[0]);
        } else {
            return done(null, false, {"message": "User not found."});
        }
    })
);

//_________________________________________________
//This file connects our server to mongoDB and uses the router we have created
mongoose.connect('mongodb://localhost/kohteet');
mongoose.connect('mongodb://localhost/users')
// Initialize http server
const app = express();



//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '15mb' }), function (error, req, res, next) {
    if (error instanceof Error) {
        return res.send('500', { error: error });
    } else {
        next();
    }
});
//__________________________________________________

// initialize passposrt and and session for persistent login sessions
app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
 
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
 
    res.sendStatus(401);
}

//__________________________________________________



// Logger outputting all requests in to the console
app.use(morgan('combined'));

// Use v1 as prefix for your API endpoints
app.use('/v1', router);

// Serve javascript files from js subdirectory
app.use("/js", express.static(__dirname + "/js"));

// Serve images from img subdirectory
app.use("/img", express.static(__dirname + "/img"));

app.set('view engine', 'pug');
// Launches server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
