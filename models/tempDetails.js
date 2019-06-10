const Sequelize = require('sequelize');
const db = require('../config/database');

const Tempcard = db.define('TEMPCARD_DEV', {
  TEMPCARD_ID : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  EMP_ID: {
    type: Sequelize.STRING
  },
  DATE: {
    type: Sequelize.DATEONLY
  },
  IN_TIME: {
    type: Sequelize.TIME
  },
  OUT_TIME: {
    type: Sequelize.TIME
  },
  OTP: {
    type: Sequelize.STRING
  }},
{
freezeTableName: true,
timestamps: false,
})

module.exports = Tempcard;
