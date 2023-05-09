const express = require("express");
const footware = express.Router();

//INDEX
footware.get("/", (req, res) => {
    console.log("Welcome to the Footware App")
});




module.exports = footware;

