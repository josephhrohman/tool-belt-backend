const express = require('express'),
      bcrypt = require('bcryptjs'),
      router = express.Router(),
      db = require('../models');

router.post('/register', async (req, res) => {
  const errors = [];

  if (!req.body.name) errors.push({message: 'Please enter your name'});
  if (!req.body.email) errors.push({message: 'Please enter a correct email or password'});
  if (!req.body.password) errors.push({message: 'Please enter your password'});
  if (!req.body.password !== req.body.password2) errors.push({message: 'Your passwords do not match'});

  if (errors.length) return res.return(400).json({status: 400, erros});

  try {
    const existingUser = await db.User.findOne({email: req.body.email});

    if (existingUser) return res.status(400).json({status: 400, errors: [{message: 'Email address has already been registered'}]});

  } catch {

    const passwordHasher = bcrypt.hashSync(req.body.password, 10);
    const newUser = {};
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = passwordHasher;

    const savedUser = await db.User.create(newUser);
    return res.send(500).json({status: 500, errors: err});

  }
});

router.post('/login', async (req, res) => {
  if (!req.body.email || !req.body.password) return res.status(400).json({status: 400, error: 'Please enter the correct login information'})

  try {
    const findUser = await db.User.findOne({email: req.body.email});
    if (!req.body.email) return res.status(400).json({status: 400, error: 'Please enter the correct login information'});

    const matchPassword = db.bcrypt.compareSync(req.body.password, findUser.password);
    if (!req.body.password) return res.status(400).json({status: 400, error: 'Please enter the correct login information'});

    req.session.confirmedUser = findUser._id;
    res.status(200).json({status: 200, confirmedUser = findUser._id});

  } catch {
    return res.status(500).json({status: 500, errors: 'Something went wrong on our end.  Hang tight.'});

  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({status: 500, errors: 'Something went wrong on our end.  Hang tight.'});
    res.clearCoockie('connect.sid').json({status: 200, message: 'You\'ve Logged Out'});
  });
});

module.exports = router;