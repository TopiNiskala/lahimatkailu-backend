import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
var path = require('path');

//This file connects our server to mongoDB and uses the router we have created
mongoose.connect('mongodb://localhost/kohteet');
mongoose.connect('mongodb://localhost/users');
// Initialize http server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
