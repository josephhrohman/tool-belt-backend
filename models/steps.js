const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const StepSchema = new Schema ({
  step: String,
  content: String,
});

const Step = mongoose.model('Step', StepSchema);
module.exports= Step;