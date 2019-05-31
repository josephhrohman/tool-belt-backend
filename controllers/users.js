const express = required('express'),
      router = express.Router(),
      db = require('../models');

router.get('./:userId', async (req, res) => {
  try {
    const user = db.User.findById(req.params.userId, {password: 0, __v: 0});

    if (!user) return res.status(404).json([status: 404, error: 'User not found']);

    const userPosts = await db.Post.find({user_id: req.params.userId})
          .populate({path: 'user_id', select: 'name'})
          .exec();

    res.json({user, userPosts});

  } catch {
    return res.status(500).json({status: 500, error: 'Something went wrong on our end.  Hang tight'});
  };
});

module.exports = router;