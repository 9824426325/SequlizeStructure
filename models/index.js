const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('employe', 'root', '12345', {
    host: 'localhost',
    logging:false,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db ={}
  db.sequelize = Sequelize;
  db.sequelize =  sequelize;
  db.user = require('./user')(sequelize, DataTypes, Model)
 db.contect = require('./contect')( sequelize, DataTypes)
  db.sequelize.sync({ force: true });

  module.exports = db  