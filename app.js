const express = require("express") 
const cors = require("cors");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Footware App!")
});

module.exports = app;
