const express = require("express")
      router = express.Router()
      db = require("../models");

router.get("/", (req, res) => {
  db.Project.find({}, (err, allProjects) => {
    if (err) res.send(err);
    res.json(allProjects);
  });
});

router.get("/:id", (req, res) => {
    db.Project.findById(req.params.id, (err, foundProject) => {
      if (err) res.send(err);
      res.json(foundProject);
    });
});

router.post("/", (req, res) => {
  db.Project.findOne({ title: req.body.title }, (err, foundProject) => {
    if (err) {
      res.json({ err });
    }
    if (foundProject) {
      res.json({message: "This project exists already."});
    } else {
      db.Project.create(req.body, (err, newProject) => {
        if (err)
          return res.json({project: req.body, error: "Could not create project."
          });
        res.json({message: "Project filed!", project: newProject});
      });
    };
  });
});

router.put("/:project", (req, res) => {
  db.Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProject) => {
      if (err) res.send(err);
      res.json(updatedProject);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
    if (err) res.send(err);
    res.json(deletedProject);
  });
});

module.exports = router;
