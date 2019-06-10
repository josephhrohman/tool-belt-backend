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
});

module.exports = mongoose.model('User', UserSchema);