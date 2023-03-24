const router = require('express').Router();
const { User, Post } = require('../models');
// const homeRoute = require('./homeRoutes');

// router.use('/', homeRoute);

// GET all users
router.get('/users', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'name', 'description', 'content', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
        .then(dbPostData => res.render('homepage', { posts: dbPostData }))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;