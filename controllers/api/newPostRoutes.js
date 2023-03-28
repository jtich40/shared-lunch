const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// create new blog post
router.post('/new-post', withAuth, (req, res) => { 
  Post.create({ 
    title: req.body.title, 
    description: req.body.description, 
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a post
// router.delete('/:id', (req, res) => {
//   Post.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No Post found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


module.exports = router;