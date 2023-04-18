const banco = require("../database/database.js"); //calling db

const Sequelize = require("sequelize");

//TODO: log of users

//formating logging table
const Log = banco.define("selectedTrack", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    artistName: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    trackName: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Log;