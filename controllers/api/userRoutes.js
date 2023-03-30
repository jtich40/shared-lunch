const router = require('express').Router();
const { User } = require('../../models');

// get login page
// router.get('/login', (req, res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//         res.redirect('/dashboard')
//         return
//     }
//     res.render('login');
// });

// send login info to server
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: {
        username: req.body.username }});
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username, please try again or Signup' });
        return;
      }
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again or Signup' });
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

// Terminate sessions and redirect to main page
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
            // req.session.username = dbUserData.username;
            req.session.logged_in = true;
            // req.session.name = dbUserData.name;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
        
module.exports = router;