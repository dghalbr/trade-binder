require('dotenv').config({path: './.env'});

const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const Neo4jApi = require('./neo4j-api');
const app = express();
const db = new Neo4jApi();
const port = process.env.ENV_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
/*
app.get('/', (req, res) => {
    db.getNodes()
        .then((nodes) => {
            res.render('', { nodes });
        })
        .catch(error => res.status(500).send(error));
});

app.post('/', (req, res) => {
    const name = req.body.name;
    db.createNode(name)
        .then(() => res.redirect('/'))
        .catch(error => res.status(500).send(error));
});

app.post('/clear', (req, res) => {
    db.clearNodes()
        .then(() => res.redirect('/'))
        .catch(error => res.status(500).send(error));
});
*/

MongoClient.connect("mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds137110.mlab.com:37110/telligent", function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
    console.log("kent broke everything");
  }
});

app.listen(port,
    () => console.log(`Server listening on http://localhost:${port}`));
