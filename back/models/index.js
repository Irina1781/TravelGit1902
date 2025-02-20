const travelmodel=require('./travel');
const sequelize = require('../config/db');
const Sequelize = require('sequelize');
const db={};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.travel=travelmodel(sequelize);
module.exports = db;