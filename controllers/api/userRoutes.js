const router = require('express').Router();
const { User } = require('../../models');

// get login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard')
        return
    }
    res.render('login');
});

// send login info to server
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    // If no data exists that means the associated user does not exist at all, return error
    if (!dbUserData) {
      res.status(400).json({ message: 'No user Found!' });
      return;
    }

    // Check the submitted password
    const validPassword = dbUserData.checkPassword(req.body.password);
    // If it is not valid, notify the user
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
  });
  // Otherwise, save the session so we can refer to these parameters and update the state of the application accordingly
  req.session.save(() => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;
    res.json({ user: dbUserData, message: 'You are now logged in!' });
  });
});


// Terminate sessions and redirect to main page
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
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
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
        
module.exports = router;