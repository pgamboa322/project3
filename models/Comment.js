const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
  {
    writtenBy: {
      type: String
    },
    commentText: {
      type: String
    },
    commentCreatedAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

const Comment = model('Comment', CommentSchema);

module.exports = Comment;