const sequelize = require('../config/connection'); // Import the connection to the database
const { User, Post,} = require('../models'); // Import the models
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
        name: 'My First Blog Post',
        contact: 'John Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: user.id
      };
      const post2 = {
        name: 'My First Blog Post',
        contact: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: user.id
      };
      posts.push(post1, post2);
    });
    return Post.bulkCreate(posts);
  })