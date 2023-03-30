const { Model, DataTypes } = require('sequelize'); // Import the Model class and DataTypes object from the Sequelize package
const sequelize = require('../config/connection'); // Import the connection to the database (to connect models to the database)
const bcrypt = require('bcrypt'); // Import the bcrypt package to hash passwords

class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init( // Create a new class called User that extends the functionality of Sequelize's Model class
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }


    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'

    }
);

module.exports = User;

