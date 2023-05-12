const express = require("express");
const footwares = express.Router();
const {
    getAllFootware,
    getOneFootware,
    createFootware,
    updateFootware,
    deleteFootware
} = require("../queries/footware.js");

//INDEX
footwares.get("/", async (req, res) => {
    const allFootware = await getAllFootware();
    res.status(200).json(allFootware);
});

//SHOW
footwares.get("/:id", async (req, res) => {
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
footwares.post("/", async (req, res) => {
    const {name, cost, category, url, image, is_trending } = req.body;
    const newFootware = await createFootware({
        name, 
        cost,
        category, 
        url, 
        image,
        is_trending 
    });
    if (!newFootware.error) {
        res.status(201).json(newFootware);
    }else {
        res.status(500).json({error: "server error"})
    }
})  

//UPDATE FOOTWARE
footwares.put("/:id", async (req, res) => {
    const { id } = req.params;
    const footware = req.body;
    const updatedFootware = await updateFootware(id, footware);
    if (!updatedFootware.error) {
        res.status(201).json(updatedFootware);
    }else {
        res.status(500).json({error: "server error"})
    }
  });

  //DELETE
  footwares.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedFootware = await deleteFootware(id);
    console.log(deletedFootware);
    if (deletedFootware.id) {
      res.status(201).json(deletedFootware);
    } else {
      res.status(404).json("Footware not found");
    }
  });



module.exports = footwares;

