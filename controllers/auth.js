const express = require('express'),
      router = express.Router(),
      db = require('../models'),
      bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  const errors = [];

  if (!req.body.name) errors.push({message: 'Please enter your name.'});
  if (!req.body.email) errors.push({message: 'Please enter your email.'});
  if (!req.body.password) errors.push({message: 'Please enter your password.'});
  if (req.body.password !== req.body.password2) errors.push({message: 'Your passwords do not match.'});

  if (errors.length > 0) return res.status(400).send(errors);

  db.User.findOne({email: req.body.email}, (err, foundUser) =>{
    if (foundUser) return res.status(400).send({message: 'This email is already in use.'});

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).json({user: req.body, error: 'Something went wrong. Please try again.'});

      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return res.json({user: req.body, error: 'Something went wrong. Please try again.'});

        const newUser = {
          name: req.body.name,
          email: req.body.email,
          password: hash
        }

        db.User.create(newUser, (err, newUser) => {
          if (err) return res.json({user: req.body, error: 'Something went wrong. Please try again.'});

          return res.status(200).send('User created successfully.');
          });
      });
    });
  });
});

router.post('/login', (req, res) => {

  if (!req.body.email || !req.body.password) {
    return res.status(400).send('Please enter your username and password.');
  }

  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(400).send('Username or password is incorrect.');
    if (!foundUser) return res.status(400).send('Username or password is incorrect.');

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err) return res.status(400).send('There was a problem. Please try again.');
      if (isMatch) {
        req.session.loggedIn = true;
        req.session.currentUser = {
          id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email
        };
        return res.send(foundUser._id);
      } else {
        return res.status(400).send('Username or password is incorrect.');
      }
    });
  });
});

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(400).send('Username or password is incorrect.');
    res.clearCookie('connect.sid').json({status: 200, message: 'Logout successful'});
  });
});

module.exports = router;