const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

//GET dashboard page
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      attributes: ['id', 'title', 'description', 'content',],    // user_id, name 
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    })

      .then(dbPostData => res.render('dashboard', { posts: dbPostData }))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  // get new post page
router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post');
});

module.exports = router;