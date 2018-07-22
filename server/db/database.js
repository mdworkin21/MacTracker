const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/MacTrack')

//This file creates the db connectiomn with postgres. Models are defined in their own folders.


module.exports = db

