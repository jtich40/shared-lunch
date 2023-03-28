const User = require('./user');
const Post = require('./post');

// create associations

User.hasMany(Post, { foreignKey: 'user_id', onDelete: 'CASCADE' }); // onDelete: 'CASCADE' means that if the user is deleted, then delete any associated posts
Post.belongsTo(User, { foreignKey: 'user_id' }); // This is the reverse association of the one above

module.exports = { User, Post,};
