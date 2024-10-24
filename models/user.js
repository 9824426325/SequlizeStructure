//const {  DataTypes,Model } = require('sequelize');
//const sequelize = require('./index');
module.exports=(sequelize,DataTypes,Model)=>{
// ------modelcreate class conponet second methoid --------
class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  },
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true


{/*
  ----modelcreate function conponet first methoid --------
  
  const {  DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      //defaultValue: DataTypes.NOW,
    },
  },
  {
    // Other model options go here
    tableName: 'users',
    //timestamps: false,
     // createdAt: true,
     // updatedAt: 'updated_at',
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true */}

//sequelize.sync({ force: true });

//module.exports = User

return Contect;
}