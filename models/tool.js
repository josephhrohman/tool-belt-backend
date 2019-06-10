const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ToolSchema = new Schema ({
  title: String,
  image_url: String,
  description: String,
  rating: Number,
  toolBelt: String,
  category: String,
  user: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

const Tool = mongoose.model('Tool', ToolSchema);
module.exports = Tool;
