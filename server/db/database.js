const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/MacTrack', {logging: false})

//Models


module.exports = db