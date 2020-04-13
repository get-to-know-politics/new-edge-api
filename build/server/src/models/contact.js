"use strict";

module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    }
  }, {});

  Contact.associate = function (models) {// associations can be defined here
  };

  return Contact;
};
//# sourceMappingURL=contact.js.map