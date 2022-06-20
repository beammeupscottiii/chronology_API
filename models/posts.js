const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  owner: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'User'
  }, 
  author: {
    type: String,
    required: true,
    index: true,
  },
  title: {
      type: String,
      required: true,
      index: true,
  },
  content: {
      type: String,
      required: true,
      index: true, 
  },
  tags: [{
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Tags'
  }],
  isPersonal: Boolean,
  setEvent_Year: String,
  setEvent_Month: String,
  setEvent_Day: String,
}, {timestamps: true});


module.exports = mongoose.model('Posts', PostsSchema);