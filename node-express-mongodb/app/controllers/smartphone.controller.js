const db = require("../models");
const Smartphone = db.smartphones;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const smartphone = new Smartphone({
    name: req.body.name,
    image: req.body.image,
    storage: req.body.storage,
    color: req.body.color,
    quantity: req.body.quantity,
    stock: req.body.stock ? req.body.stock : true
  });

  smartphone
    .save(smartphone)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Smartphone."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Smartphone.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving smartphones."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Smartphone.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Smartphone with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Smartphone with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Smartphone.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Smartphone with id=${id}. Maybe Smartphone was not found!`
        });
      } else res.send({ message: "Smartphone was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Smartphone with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Smartphone.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Smartphone with id=${id}. Maybe Smartphone was not found!`
        });
      } else {
        res.send({
          message: "Smartphone was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Smartphone with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Smartphone.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Smartphones were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all smartphones."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Smartphone.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving smartphones."
      });
    });
};
