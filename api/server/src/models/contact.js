module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    }
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};