//uppercase == lib
const Sequelize = require("sequelize");

//lowercase == object (instance) | PS: read docs
// |-> dbname, name, password, host, port, options
const sequelize = new Sequelize(
    "clientdb",
    "root",
    "Josnei123@",
    {
        host: "localhost",
        port: 3306,
        dialect: "mysql", 
        logging: false
    }
);


//exporting to make it public
module.exports = sequelize;