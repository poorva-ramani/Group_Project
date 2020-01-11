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
        len: [1, 255]
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
      validate: {
        len: [1, 255]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    // is_eaten: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false
    // }
    



  }, {
    timestamps: false
  });

  return Users;
};

