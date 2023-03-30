const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

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

// get dashboard page
// router.get('/dashboard', withAuth, async (req, res) => {
//     try {
//         const dbPostData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ 
//                 model: Post,
//                 attributes: ['name', 'contact', 'content']
//             }],
//             where: {
//                 id: req.session.user_id
//             }
//           });
//         const blogPosts = dbPostData.get({ plain: true })

//         res.render('dashboard', {
//             ...blogPosts,
//             logged_in: true
//             // username: req.session.username
//         })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
//   })

module.exports = router;