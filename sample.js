// const express = require('express'),
//       router = express.Router(),
//       db = require('../models');

// // router.post('/tools', (req, res) => {
// //   // const errors = [];

// //   // if (!req.body.title) errors.push({message: 'Please enter your name.'});
// //   // if (!req.body.image_url) errors.push({message: 'Please enter your email.'});
// //   // if (!req.body.description) errors.push({message: 'Please enter your password.'});

// //   // if (errors.length > 0) return res.status(400).send(errors);

// //   // const newTool = {
// //   //   title: req.body.title,
// //   //   image_url: req.body.image_url,
// //   //   description: req.body.description
// //   // }

// //   db.Tool.create(newTool, (err, newTool) => {
// //     if (err) return res.json({user: req.body, error: 'Something went wrong. Please try again.'});
// //     return res.status(200).send('Tool created successfully.');
// //     });
// // });

// // title: String,
// // image_url: String,
// // description: String,
// // user_id: {
// //   type: Schema.Types.ObjectId,
// //   ref: 'User'
// // },
// // step_id: {
// //   type: Schema.Types.ObjectId,
// //   ref: 'Step'
// // },
// // creation_date: {
// //   type: Date,
// //   default: Date.now
// // },


// router.get('/', async (req, res) => {
//   try {
//     const tool = await db.Tool.find({});
//       res.json({tool});
//     } catch(err) {
//     console.log(err);
//     return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
//   }
// });



// // // GET All Tools
// // router.get('/:postId', async (req, res) => {
// //   try {
// //     const post = await db.Post.findById(req.params.postId)
// //       .populate('user_id', '-password -__v')
// //       .populate('city_id')
// //       .exec();

// //     res.json({post})
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
// //   }
// // });

// // // DELETE Post Destroy Route
// // router.delete('/:postId', async (req, res) => {
// //   if (!req.session.currentUser) {
// //     return res.status(401).json({status: 401, error: 'Unauthorized. Please login and try again'});
// //   }

// //   try {
// //     const post = await db.Post.findById(req.params.postId);
// //     if (post.user_id.toString() === req.session.currentUser) {
// //       const deletedPost = await post.deleteOne();
// //       res.sendStatus(200);
// //     }
// //     res.status(401).json({status: 401, error: 'Unauthorized. Please log in and try again'});
// //   } catch(err) {
// //     console.log(err);
// //     return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
// //   }
// // });

// // module.exports = router;

// // router.get("/:id", (req, res) => {
// //     db.Tool.findById(req.params.id, (err, foundTool) => {
// //       if (err) res.send(err);
// //       res.json(foundTool);
// //     });
// // });

// router.post("/", (req, res) => {
//   db.Tool.create(req.body, (err, newTool) => {
//     if (err)
//       return res.json({Tool: req.body, error: "Could not create Tool."
//       });
//     res.json({message: "Tool filed!", Tool: newTool});
//   })
// });

// // router.put("/:Tool", (req, res) => {
// //   db.Tool.findByIdAndUpdate(
// //     req.params.id,
// //     req.body,
// //     { new: true },
// //     (err, updatedTool) => {
// //       if (err) res.send(err);
// //       res.json(updatedTool);
// //     }
// //   );
// // });

// // router.delete("/:id", (req, res) => {
// //   db.Tool.findByIdAndDelete(req.params.id, (err, deletedTool) => {
// //     if (err) res.send(err);
// //     res.json(deletedTool);
// //   });
// // });

// module.exports = router;
