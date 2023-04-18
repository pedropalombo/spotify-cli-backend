const banco = require("../database/database.js"); //calling db

const Sequelize = require("sequelize");

//TODO: log of users

//formating logging table
const Log = banco.define("searchInput", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    searchInput: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Log;