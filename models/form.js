const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define your Form model
const Form = sequelize.define('Form', {
  uniqueId: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: "User"
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(155),
    unique: true,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  isGraduated: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('Form model synced with database');
  })
  .catch(err => {
    console.error('Error syncing Form model:', err);
  });

// Export the Form model
module.exports = Form;
