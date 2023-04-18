const log = require("./routes/log.js"); //'Log' main

const db = require("./database/database.js"); //database

var cors = require('cors'); // CORS |-> enables request to outside routes

const bodyparser = require("body-parser");  //gets request's body easier

var express = require("express");
var app = express();

const porta = 8000;

//enabling access to all routes
app.use(cors());

//setting body-parser 
app.use(bodyparser.urlencoded({
    extended: true
}));

//formats body-parser as JSON 
app.use(bodyparser.json());

(async() => {
    //await db.sync({force: true}); //reset entire database
    await db.sync();    //creates db
    
    console.log("Database connected")
})();

app.use("/log", log);

//opens server
app.listen(porta, () => {
    console.log(`Server active on thread ${porta}`);    
});