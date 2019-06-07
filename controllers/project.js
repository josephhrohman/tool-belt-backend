const express = require('express'),
      router = express.Router(),
      db = require('../models');

router.get('/', async (req, res) => {
  try {
    const project = await db.Project.find({});
      res.json(project);
    } catch(err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }
});

router.get('/:_id', async (req, res) => {
  try {
    const project = await db.Project.findById(req.params._id, {});
    if (!project) return res.status(404).json({status: 404, error: 'Project not found'});
      res.json(project);
  } catch(err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }
});

router.post('/', (req, res) => {
  const errors = [];

  if (!req.body.title) errors.push({message: 'Please enter your name.'});
  if (!req.body.image_url) errors.push({message: 'Please enter your email.'});
  if (!req.body.description) errors.push({message: 'Please enter your password.'});

  if (errors.length > 0) return res.status(400).send(errors);

  const newProject = {
    title: req.body.title,
    image_url: req.body.image_url,
    description: req.body.description,
    // user_id: req.session.currentUser.id,
  };

  db.Project.create(newProject, (err, newProject) => {
    if (err) return res.json({user: req.body, error: 'Something went wrong. Please try again.'});
    return res.status(200).send('Project created successfully.');
    });
});

// DELETE Post Destroy Route
router.delete('/:postId', async (req, res) => {
  // if (!req.session.currentUser) {
  //   return res.status(401).json({status: 401, error: 'Unauthorized. Please login and try again'});
  // }
  try {
    const project = await db.Project.findById(req.params.postId);
    const deletedPost = await project.deleteOne();
    // if (post.user_id.toString() === req.session.currentUser) {
    //   const deletedPost = await project.deleteOne();
    //   res.sendStatus(200);
    // }
    // res.status(401).json({status: 401, error: 'Unauthorized. Please log in and try again'});
    res.sendStatus(200);
  } catch(err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }
});


module.exports = router;
