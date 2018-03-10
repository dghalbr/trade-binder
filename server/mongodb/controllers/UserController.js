const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const User = require('../schemas/User');

/**
 * Returns requested user from the db if present
 */
router.get('/', function(req, res) {
  User.find({}, req.params.email, function(err, users) {
    if (err) return res.status(500).send('There was a problem finding the user.');
    res.status(200).send(users);
  });
});

/**
 * Create a new user
 * Example call using axios:
 * axios({
 *   method: 'post',
 *   url: 'http://localhost:3001/users',
 *   params:
 *       {
 *           email: 'dude@dude.com',
 *           avatarUrl: 'www.url.com',
 *           zipcode: '12345',
 *           other: ''
 *       }
 *   }).then(function (response) {
 *      console.log('success');
 * });
 */
router.post('/', (req, res) => {
  User.create(
    {
      email: req.query.email,
      avatarUrl: req.query.avatarUrl,
      zipcode: req.query.zipcode,
      other: req.query.other
    },
    function(err, user) {
      if (err) return res.status(500).send('There was a problem adding the information to the database.');
      res.status(200).send(user);
    }
  );
});

module.exports = router;
