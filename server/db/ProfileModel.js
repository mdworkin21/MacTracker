const db = require('./database')
const Sequelize = require('sequelize')

//Profile Model

const Profile = db.define('profiles', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  calGoal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  proteinGoal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  carbGoal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  fatGoal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  streak: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }    
})

module.exports = Profile