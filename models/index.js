const mongoose = require('mongoose'),
      DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/tool-belt';

mongoose.connect(DB_URL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log('MongoDB connected successfully...'))
  .catch((err) => console.log(err));

module.exports = {
  User: require('./user'),
  Project: require('./project'),
  Tool: require('./tool'),
};