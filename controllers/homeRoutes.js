const router = require('express').Router();
const { Post, User } = require('../models');

//  get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const blogPostData = await Post.findAll({
            attributes: [ 'name', 'contact', 'content'],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ]
        });
        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
            });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard')
        return
    }
    res.render('login');
});

module.exports = router;