const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const StepSchema = new Schema ({
  title: String,
  content: String,
  
});

const Step = mongoose.model('Step', StepSchema);
module.exports= Step;