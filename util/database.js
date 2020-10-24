const Sequelize = require('sequelize');

const sequelize = new Sequelize('storeFront', 'root', 'storeFront', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
