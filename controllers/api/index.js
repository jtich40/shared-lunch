const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./newPostRoutes');

router.use('/new-post', postRoutes);
router.use('/users', userRoutes);

module.exports = router;