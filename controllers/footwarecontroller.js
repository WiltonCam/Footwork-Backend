const express = require("express");
const footware = express.Router();
const {
    getAllFootware,
    getOneFootware,
} = require("../queries/footware.js");

//INDEX
footware.get("/", async (req, res) => {
    const allFootware = await getAllFootware();
    res.status(200).json(allFootware);
});

//SHOW
footware.get("/:id", async (req, res) => {
    const { id } = req.params;
    const footware = await getOneFootware(id);
    if(!footware.error) {
        res.status(200).json(footware);
    }else if (footware.error.code === 0) {
        res.status(404).json("footware not found")
    }else {
        res.status(500).json({error: "server error"})
    }
});
       
//CREATE
footware.post  





module.exports = footware;

