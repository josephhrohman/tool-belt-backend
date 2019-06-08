const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
  title: String,
  image_url: String,
  description: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tool_id: {
    type: Schema.Types.ObjectId,
    ref: 'Tool'
  },
  creation_date: {
    type: Date,
    default: Date.now
  },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports= Project;