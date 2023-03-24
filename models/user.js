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
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        //define a name column
        name: {
            type: DataTypes.STRING,
            allowNull: true,
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

