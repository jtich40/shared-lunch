const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const blogPostData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['name', 'contact', 'content'],
                      include: [
              {
                  model: User,
                  attributes: ['username'],
              }
          ]
        });
        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        res.render('dashboard', {
            blogPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//  get new post page
router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post');
});

module.exports = router;