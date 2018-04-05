import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import passport from 'passport';
var path = require('path');
var session = require("express-session");


//This file connects our server to mongoDB and uses the router we have created
mongoose.connect('mongodb://localhost/kohteet');
mongoose.connect('mongodb://localhost/users');
// Initialize http server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '15mb' }), function (error, req, res, next) {
    if (error instanceof Error) {
        return res.send('500', { error: error });
    } else {
        next();
    }
});

//Login Middleware

app.use(express.static("public"));
app.use(session({ secret: "cats",
                resave: false,
                saveUninitialized: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


//-- SERIALIZATION--

passport.serializeUser(function(user, done) {
    done(null, user._id);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


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
