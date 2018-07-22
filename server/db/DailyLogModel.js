const db = require('./database')
const Sequelize = require('sequelize')

//Daily Log Model
const DailyLog = db.define('dailyLog', {
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  calories: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0"
  },
  protein: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0"
  },
  fat: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0"
  },
  carb: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0"
  }
})

//Hooks (Might need before validate/after save? hook to convert macros to integer if they're in decimals )

module.exports = DailyLog