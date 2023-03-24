const router = require('express').Router();

// GET all posts
router.get('/posts', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'name', 'description', 'content', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;