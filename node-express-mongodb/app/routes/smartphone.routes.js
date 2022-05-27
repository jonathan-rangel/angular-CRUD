module.exports = app => {
  const smartphones = require("../controllers/smartphone.controller.js");

  var router = require("express").Router();

  router.post("/", smartphones.create);

  router.get("/", smartphones.findAll);

  router.get("/published", smartphones.findAllPublished);

  router.get("/:id", smartphones.findOne);

  router.put("/:id", smartphones.update);


  router.delete("/:id", smartphones.delete);

  router.delete("/", smartphones.deleteAll);

  app.use("/api/smartphones", router);
};
