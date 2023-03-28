const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./newPostRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('dashboard', dashboardRoutes);

module.exports = router;