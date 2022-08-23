const { Comment, Post } = require('../models');

const commentController = {
    // add comment to Post
    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
          .then(({ _id }) => {
            return Post.findOneAndUpdate(
              { _id: params.postId },
              { $push: { comments: _id } },
              { new: true }
            );
          })
          .then(dbPostData => {
            if (!dbPostData) {
              res.status(404).json({ message: 'No post found with this id!' });
              return;
            }
            res.json(dbPostData);
          })
          .catch(err => res.json(err));
    },

    // remove comment from Post
    removeComment({ params }, res) {
        Comment.findOneAndDelete({ _id: params.commentId })
          .then(deletedComment => {
            if (!deletedComment) {
              return res.status(404).json({ message: 'No comment with this id!' });
            }
            return Post.findOneAndUpdate(
              { _id: params.PostId },
              { $pull: { comments: params.commentId } },
              { new: true }
            );
          })
          .then(dbPostData => {
            if (!dbPostData) {
              res.status(404).json({ message: 'No post found with this id!' });
              return;
            }
            res.json(dbPostData);
          })
          .catch(err => res.json(err));
    },

    // add reply to comment
    addReply({ params, body }, res) {
      Comment.findOneAndUpdate(
        { _id: params.commentId },
        { $push: { replies: body } },
        { new: true }
      )
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => res.json(err));
    },

    // remove reply from comment
    removeReply({ params }, res) {
      Comment.findOneAndUpdate(
        { _id: params.commentId },
        { $pull: { replies: { replyId: params.replyId } } },
        { new: true }
      )
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.json(err));
    }
};

module.exports = commentController;