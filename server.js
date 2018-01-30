import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
var path = require('path');

mongoose.connect('mongodb://localhost/jotkut');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));
app.use('/v1', router);


// app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'jade');

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
