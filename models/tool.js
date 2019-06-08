const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ToolSchema = new Schema ({
  title: String,
  image_url: String,
  description: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Tool = mongoose.model('Tool', ToolSchema);
module.exports= Tool;

// user_id: {
//   type: Schema.Types.ObjectId,
//   ref: 'User'
// },
// step_id: {
//   type: Schema.Types.ObjectId,
//   ref: 'Step'
// },
// creation_date: {
//   type: Date,
//   default: Date.now
// },