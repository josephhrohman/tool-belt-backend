const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema ({
  name: String,
  email: String,
  password: String,
  image_url: String,
  sign_up_date: {
    type: Date,
    default: Date.now
  },
  // Tools?
  // Projects?
});

const User = mongoose.model('User', UserSchema);
module.exports= User;