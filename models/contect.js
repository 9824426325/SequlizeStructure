// const {  DataTypes } = require('sequelize');
// const sequelize = require('./index');
module.exports=(sequelize,DataTypes)=>{

const Contect  = sequelize.define(
  'Contect',
  {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      //defaultValue: DataTypes.NOW,
    },
  },
  {
    // Other model options go here
    tableName: 'Contects',
    //timestamps: false,
     // createdAt: true,
     // updatedAt: 'updated_at',
  },
);

// `sequelize.define` also returns the model
//console.log(Contect === sequelize.models.Contect); // true */}
return User;
}
