const router = require('express').Router();
const { Post, User } = require('../models');

//  get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const blogPostData = await Post.findAll({
            attributes: [ 'id','title', 'description', 'content'], // not sure if we need user_id
                    include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn
            });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;