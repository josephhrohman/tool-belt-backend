const express = require("express"),
      router = express.Router(),
      db = require("../models");

router.get("/", (req, res) => {
  db.User.find({}, {password: 0}, (err, allUsers) => {
    if (err) return res.send(err);
    return res.json(allUsers);
  });
});

router.get("/:id", (req, res) => {
  db.User.findById(req.params.id, {password: 0}, (err, foundUser) => {
    if (err) return res.send(err);
    return res.json({foundUser});
  });
});

router.put("/:id", (req, res) => {
  if (req.session.loggedIn && req.session.currentUser.id === req.params.id) {
    db.User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedUser) => {
        if (err) return res.send(err);
        return res.json(updatedUser);
      }
    );
  } else {
    return res.status(401).json({ error: "You may not update this user." });
  }
});

router.delete("/:id", (req, res) => {
  if (req.session.loggedIn && req.session.currentUser.id === req.params.id) {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
      if (err) return res.send(err);
      return res.json(deletedUser);
    });
  } else {
    return res.json({error: "You may not delete this user."})
  }
});

module.exports = router;