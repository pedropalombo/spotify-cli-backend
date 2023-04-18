var express = require("express");
var app = express();


//calling track log format
const TrackLog = require("../model/selectedTrack.js");

//calling search log format
const SearchLog = require("../model/searchInput.js");

//"Selected Track" route
app.post("/selectedTrack", async (req, res) => {

    //checks if the req didn't come empty
    if(logParamsIsNotNull(req, 'track')) {
        try {
            await setLogBody(req, "track")

            res.status(201).json({ success: "true"})

        } catch(e) {

            res.status(500).json(e)
        }
    }
})

//"Search" route
app.post("/search", async (req, res) => {

    //checks if the req didn't come empty
    if(logParamsIsNotNull(req, 'search')) {
        try {
            await setLogBody(req, "search")

            res.status(201).json({ success: "true"})

        } catch(e) {
            res.status(500).json(e)
        }
    }
})

//checks validity of params sent in req
function logParamsIsNotNull(req, route) {

    switch(route) {
        case 'track':
            return req.body.trackName != null && req.body.artistName != null;

        case 'search':
            return req.body.searchInput != null;

        default:
            break;
    } 

    
}

//makes 'Log' body
async function setLogBody(req, route) {

    switch(route) {
        case 'track':
            return await TrackLog.create({
                artistName: req.body.artistName,
                trackName: req.body.trackName
            })

        case 'search':
            return await SearchLog.create({
                searchInput: req.body.searchInput
            })

        default:
            break;
    } 

}

module.exports = app;