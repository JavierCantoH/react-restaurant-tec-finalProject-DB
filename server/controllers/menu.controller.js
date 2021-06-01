const db = require("../models");
const Menu = db.api;
const Op = db.Sequelize.Op;

// Create and Save a new product on menu
exports.create = (req, res) => {
  
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  
};

// Find a single product with an id
exports.findOne = (req, res) => {
  
};

// Update a product by the id in the request
exports.update = (req, res) => {
  
};

// Delete a product with the specified id in the request in the menu
exports.delete = (req, res) => {
  
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published menu
exports.findAllPublished = (req, res) => {
  
};

// CREATE AND SAVE NEW TUTORIAL

exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_category) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a product in menu
    const menu = {
      id_category: req.body.id_category,
      id_product: req.body.id_product,
      published: req.body.published ? req.body.published : false
    };
  
    // Save product in the database
    Menu.create(menu)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while agregando el producto en el menu."
        });
    });
};

exports.findAll = (req, res) => {
    const id_category = req.query.id_category;
    var condition = id_category ? { id_category: { [Op.iLike]: `%${id_category}%` } } : null;
  
    Menu.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id_menu = req.params.id_menu;
  
    Menu.findByPk(id_menu)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving products with id=" + id_menu
        });
      });
  };

  exports.update = (req, res) => {
    const id_menu = req.params.id_menu;
  
    Menu.update(req.body, {
      where: { id_menu: id_menu }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update product with id=${id_menu}. Maybe product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating product with id=" + id_menu
        });
      });
  };

  exports.delete = (req, res) => {
    const id_menu = req.params.id_menu;
  
    MMenu.destroy({
      where: { id_menu: id_menu }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Menu with id=${id_menu}. Maybe product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete product with id=" + id_menu
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Menu.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Products were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all products."
        });
      });
  };


  exports.findAllPublished = (req, res) => {
    Menu.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };