import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import passport from 'passport';
import user from './models/user';

var path = require('path');
var session = require("express-session");


//This file connects our server to mongoDB and uses the router we have created
mongoose.connect('mongodb://localhost/kohteet');
// Initialize http server
const app = express();


app.use(express.static("/list"));
app.use(session({ secret: "cats",
                resave: false,
                saveUninitialized: false}));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '15mb' }), function (error, req, res, next) {
    if (error instanceof Error) {
        return res.send('500', { error: error });
    } else {
        next();
    }
});
//app.use(express.cookieParser());
//app.use(express.bodyParser());
//app.use(express.cookieSession());
app.use(passport.initialize());
app.use(passport.session());

//-- SERIALIZATION--

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  user.findById(_id, function(err, user) {
    done(err, user);
  });
});

/*
//PASSPORT 2
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    user.findOne({
        _id: id
    }, '-password -salt', function(err, user) {
        done(err, user);
    });
});
*/

//LOGIN!!!!


//Passport Strategy
var LocalStrategy = require('passport-local').Strategy;

/*
passport.use(new LocalStrategy(
  function(username, password, done) {
    user.findOne({username: username}, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
*/

//STRATEGY 2
passport.use(new LocalStrategy(function(username, password, done) {
    user.findOne({
        username: username
    }, function(err, user) {
        // This is how you handle error
        if (err) return done(err);
        // When user is not found
        if (!user) return done(null, false);
        // When password is not correct
        if (!user.authenticate(password)) return done(null, false);
        // When all things are good, we return the user
        return done(null, user);
     });
}));

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
