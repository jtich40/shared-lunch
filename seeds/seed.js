const sequelize = require('../config/connection'); // Import the connection to the database
const { User, Post } = require('../models'); // Import the models
// Create users
const users = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_doe',
    password: 'password456',
  },
  {
    username: 'jim_smith',
    password: 'password789',
  }
];
sequelize.sync({ force: true })
  .then(() => User.bulkCreate(users))
  .then(() => {
    // Get users to create blog posts for
    return User.findAll();
  })
  .then((users) => {
    // Create blog posts for each user
    const posts = [];
    users.forEach((user) => {
      const post1 = {
        name: 'Gandalf\'s Grocery',
        contact: 'Christopher Lee',
        content: 'Day old sourdough and extra eggs. Please call 154-059-1818',
        user_id: user.id
      };
      const post2 = {
        name: 'Ministry of Silly Drinks',
        contact: 'John Cleese',
        content: 'Day old pastries. Please call 415-370-9623',
        user_id: user.id
      };
      const post3 = {
        name: 'Deadpool\'s Deli',
        contact: 'Logan',
        content: 'Extra Pastrami. Please call 509-476-4403',
        user_id: user.id
      };
      const post4 = {
        name: 'C.R.E.A.M.(ERY)',
        contact: 'Russell Jones',
        content: 'Extra ice cream. Please call 402-954-2930',
        user_id: user.id
      };
      const post5 = {
        name: 'Cthulhu\'s Cakes',
        contact: 'Francis Wayland Thurston',
        content: 'We have extra pies leftover. Please call 517-861-9194',
        user_id: user.id
      };
      const post6 = {
        name: 'Bjork\s Medieval Fun Time Emporium',
        contact: 'Bjork',
        content: 'We have extra turkey legs. Please call 430-792-4765',
        user_id: user.id
      };
      // Use Promise.all to wait for all posts to be created before bulk creating them
      const postPromises = [
        Post.findOrCreate({ where: { name: post1.name }, defaults: post1 }),
        Post.findOrCreate({ where: { name: post2.name }, defaults: post2 }),
        Post.findOrCreate({ where: { name: post3.name }, defaults: post3 }),
        Post.findOrCreate({ where: { name: post4.name }, defaults: post4 }),
        Post.findOrCreate({ where: { name: post5.name }, defaults: post5 }),
        Post.findOrCreate({ where: { name: post6.name }, defaults: post6 })
      ];
      Promise.all(postPromises)
        .then((createdPosts) => {
          createdPosts.forEach(([post, created]) => {
            if (created) {
              posts.push(post);
            }
          });
        });
    });
    return Post.bulkCreate(posts);
  });