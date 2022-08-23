const { Post } = require('../models');

const postController = {
    // get all posts
    getAllPost(req, res) {
      Post.find({})
          .populate({
              path: 'comments',
              select: '-__v'
          })
          .then(dbPostData => res.json(dbPostData))
    },
  
    // get one Post by id
    getPostById({ params }, res) {
      Post.findOne({ _id: params.id })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
  
    // create Post
    createPost({ body }, res) {
      Post.create(body)
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.json(err));
    },
  
    // update Post by id
    updatePost({ params, body }, res) {
      Post.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
          }
          res.json(dbpostData);
        })
        .catch(err => res.status(400).json(err));
    },
  
    // delete post
    deletePost({ params }, res) {
      Post.findOneAndDelete({ _id: params.id })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = postController;