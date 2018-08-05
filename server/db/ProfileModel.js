const db = require('./database')
const Sequelize = require('sequelize')

//Profile Model

const Profile = db.define('profiles', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
    
  },
  weight: {
    type: Sequelize.INTEGER
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