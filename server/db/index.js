const db = require('./database')
const Sequelize = require('sequelize')
const User = require('./UserModel')
const Profile = require('./ProfileModel')
const DailyLog = require('./DailyLogModel')

//Associations
//Profile and User
// Profile.belongsTo(User)
// User.hasOne(Profile, {foreignKey: 'userId'})

//User and Daily Log
// DailyLog.belongsTo(User)
// User.hasMany(DailyLog)

module.exports = {
  db,
  User,
  Profile,
  DailyLog
}