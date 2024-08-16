const { DataTypes } = require('sequelize')              
const sequelize =  require('../config/config')          

const User = sequelize.define('User',{                    // ORM objeto relacional mapeamento

    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    loginuser:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },

},{
    timestamps:false
});

module.exports = User