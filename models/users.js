var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {

  var Users = sequelize.define("users", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    mob_no: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    food_allergies: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    favorite_games: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    drink_preferences: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    board_games_owned: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return Users;
};

