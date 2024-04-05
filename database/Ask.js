const { DataTypes } = require("sequelize");
const connection = require("./database");

const Ask = connection.define('asks', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    }
});


Ask.sync({force: false})

module.exports = Ask;