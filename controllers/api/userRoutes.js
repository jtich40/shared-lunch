const router = require('express').Router();
const { User } = require('../../models');

// send login info to server
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ 
        where: { username: req.body.username }});
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again!' });
        return;
      }
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again!' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.redirect('/dashboard');
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });  

// logout user from server
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// send new user info to server
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.logged_in = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
        
module.exports = router;