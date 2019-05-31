const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ToolSchema = new Schema ({
  title: String,
  image_url: String,
  creation_date: {
    type: Date,
    default: Date.now
  },
  // Author?
});

const Tool = mongoose.model('Tool', ToolSchema);
module.exports= Tool;