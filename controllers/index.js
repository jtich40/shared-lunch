const router = require('express').Router();
const homeRoute = require('./homeRoutes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;