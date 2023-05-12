const express = require("express") 
const cors = require("cors");
const footwareControllers = require("./controllers/footwarecontroller.js")
//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Footware App!")
});

app.use("/footwares", footwareControllers);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

module.exports = app;
