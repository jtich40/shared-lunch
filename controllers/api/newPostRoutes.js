const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// create new blog post
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        name: req.body.name,
        content: req.body.content,
        contact: req.body.contact,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;