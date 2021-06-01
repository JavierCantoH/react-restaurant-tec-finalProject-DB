module.exports = app => {
    const Menu = require("../controllers/menu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/menu", Menu.create);
  
    // Retrieve all Tutorials
    router.get("/menu", Menu.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", Menu.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/menu/:id", Menu.findOne);
  
    // Update a Tutorial with id
    router.put("/menu/:id", Menu.update);
  
    // Delete a Tutorial with id
    router.delete("/menu/:id", Menu.delete);
  
    // Create a new Tutorial
    router.delete("/menu", Menu.deleteAll);
  
    app.use('/api/tutorials', router);
  };