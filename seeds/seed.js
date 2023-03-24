const sequelize = require('../config/connection'); // Import the connection to the database
const { User, Post,} = require('../models'); // Import the models
// Create users
const users = [
  {
    username: 'john_doe',
    password: 'password123',
    name: 'John Doe'
  },
  {
    username: 'jane_doe',
    password: 'password456',
    name: 'Jane Doe'
  },
  {
    username: 'jim_smith',
    password: 'password789',
    name: 'Jim Smith'
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
        title: 'My First Blog Post',
        name: user.name,
        description: `${user.name} has food to share`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: user.id
      };
      const post2 = {
        title: 'My Second Blog Post',
        name: user.name,
        description: `${user.name} has food to share`,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: user.id
      };
      posts.push(post1, post2);
    });
    return Post.bulkCreate(posts);
  })