const { GroupsSchema } = require('./groups.js')

const mongoose = require('mongoose');

let ContentSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  }
});

const CommentSchema = new mongoose.Schema({
  ownerUsername: {
    type: String,
    required: true
  },
  ownerID: {
    type: String,
    required: true
  },
  parentPost: {
    type: String,
    required: true
  },
  parentID: {
      type: mongoose.Schema.Types.ObjectID,
  },
  content: {
    type: String,
    required: true
  },
  postedOn_month: Number,
  postedOn_day: Number,
  postedOn_year: Number,
  commentNumber: String,
}, {timestamps: true});

CommentSchema.add({ replies: [CommentSchema]});

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
  taggedUsers: [{
    type: String,
    ref: 'User',
  }],
  isPersonal: {
    type: Boolean,
  },
  setEvent_Year: {
    type: Number,
  },
  setEvent_Month: {
    type: Number,
  },
  setEvent_Date: {
    type: Number,
  },
  usePostedByDate: {
    type: Boolean,
  },
  postedOn_month: {
    type: Number,
  },
  postedOn_day: {
    type: Number,
  },
  postedOn_year: {
    type: Number,
  },
  content: [ContentSchema],
  comments: [CommentSchema],
  timesCollected: {
    type: Number
  },
  tags: [{
    type: String
  }],
}, {timestamps: true});


module.exports.Posts = mongoose.model('Posts', PostsSchema);
module.exports.Content = mongoose.model('Content', ContentSchema);
module.exports.Comment = mongoose.model('Comment', CommentSchema);