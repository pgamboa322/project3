const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'Title is Required'
    },

    username: {
        type: Schema.Types.ObjectId,
        trim: true,

    },

    petName: {
      type: String,
      trim: true,
      required: 'Pet Name is Required'
    },

    whereLastSeen: {
      type: String,
      trim: true,
      required: "'Where the pet was last seen' is Required'"
    },

    whenLastSeen: {
      type: Date,
      required: "'When the pet was last seen' is Required'"
    },

    description: {
      type: String,
      trim: true,
      required: 'Description is Required',
      minlength: 6
    },

    postCreatedAt: {
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

const Post = model('Post', PostSchema);

module.exports = Post;
