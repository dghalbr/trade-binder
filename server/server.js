require('dotenv').config({ path: './.env' });

const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Neo4jApi = require('./neo4j-api');
const app = express();
const db = new Neo4jApi();
const port = process.env.ENV_PORT;
var cors = require('cors');

mongoose.connect(
  'mongodb://' +
    process.env.MONGO_USER +
    ':' +
    process.env.MONGO_PASS +
    '@' +
    process.env.MONGO_URL +
    '/' +
    process.env.MONGO_DB
);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Request interceptor
app.use(function(req, res, next) {
  //Preprocessing performed here.
  //ex: Validate users before processing the request
  console.log('intercepted');

  //If valid request call next to send it onward
  //else dont call next and it should kill the request at the interceptor

  //Send it onward
  next();
});

var UserController = require('./mongodb/controllers/UserController');

app.use('/users', UserController);
