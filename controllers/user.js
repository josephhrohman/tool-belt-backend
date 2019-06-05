const express = require('express'),
      router = express.Router(),
      db = require('../models');

router.get('/', async (req, res) => {
  try {
    const user = await db.User.find({}, {password: 0, __v: 0});
      res.json({user});
    } catch(err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }
});

router.get('/:_id', async (req, res) => {
  try {
    const user = await db.User.findById(req.params._id, {password: 0, __v: 0});
    if (!user) return res.status(404).json({status: 404, error: 'User not found'});
      res.json({user});
  } catch(err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }
});

module.exports = router;

// Edit User
// router.put("/:id", (req, res) => {
//   if (req.session.loggedIn && req.session.currentUser.id === req.params.id) {
//     db.User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true },
//       (err, updatedUser) => {
//         if (err) return res.send(err);
//         return res.json(updatedUser);
//       }
//     );
//   } else {
//     return res.status(401).json({ error: "You may not update this user." });
//   }
// });

// Delete User
// router.delete("/:id", (req, res) => {
//   if (req.session.loggedIn && req.session.currentUser.id === req.params.id) {
//     db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
//       if (err) return res.send(err);
//       return res.json(deletedUser);
//     });
//   } else {
//     return res.json({error: "You may not delete this user."})
//   }
// });