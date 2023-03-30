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

//GET dashboard page

// router.get('/', withAuth, async (req, res) => {
//   try {
//       const dbPostData = await Post.findAll({
//           where: {
//               user_id: req.session.user_id
//           },
//           attributes: ['title', 'content', 'description', 'id'],
//           include: [
//               {
//                   model: User,
//                   attributes: ['username'],
//               }
//           ]
//       })
//       const blogPosts = dbPostData.map(post => post.get({ plain: true }))
//       res.render('dashboard', {
//           blogPosts,
//           logged_in: true,
//           username: req.session.username
//       })
//   }
//   catch (err) {
//       console.log(err)
//       res.status(500).json(err)
//   }
// })
// router.get('/', withAuth, (req, res) => {
//     const dbPostData = Post.findAll({
//       where: {
//         user_id: req.session.user_id
//       },
//       attributes: ['id', 'title', 'description', 'content',],    // user_id, name 
//       include: [
//         {
//           model: User,
//           attributes: ['name']
//         }
//       ]
//     })

//       .then(dbPostData => res.render('dashboard', { posts: dbPostData }))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

//   // get new post page
router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post');
});

module.exports = router;