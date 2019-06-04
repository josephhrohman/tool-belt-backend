const express = require("express")
      router = express.Router()
      db = require("../models");

router.get("/", (req, res) => {
  db.Tool.find({}, (err, allTools) => {
    if (err) res.send(err);
    res.json(allTools);
  });
});

router.get("/:id", (req, res) => {
    db.Tool.findById(req.params.id, (err, foundTool) => {
      if (err) res.send(err);
      res.json(foundTool);
    });
});

router.post("/", (req, res) => {
  db.Tool.findOne({ title: req.body.title }, (err, foundTool) => {
    if (err) {
      res.json({ err });
    }
    if (foundTool) {
      res.json({message: "This tool exists already."});
    } else {
      db.Tool.create(req.body, (err, newTool) => {
        if (err)
          return res.json({Tool: req.body, error: "Could not create Tool."
          });
        res.json({message: "Tool filed!", Tool: newTool});
      });
    };
  });
});

router.put("/:Tool", (req, res) => {
  db.Tool.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTool) => {
      if (err) res.send(err);
      res.json(updatedTool);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.Tool.findByIdAndDelete(req.params.id, (err, deletedTool) => {
    if (err) res.send(err);
    res.json(deletedTool);
  });
});

module.exports = router;
