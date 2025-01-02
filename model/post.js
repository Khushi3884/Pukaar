const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  isVerified: { type: Boolean, default: false },
  votesTrue: { type: Number, default: 0 },
  votesFalse: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
