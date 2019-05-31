const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
  title: String,
  image_url: String,
  creation_date: {
    type: Date,
    default: Date.now
  },
  steps: [Step.schema]
  // Author?
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports= Project;