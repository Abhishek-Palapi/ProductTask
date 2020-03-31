const routes = require("express").Router();
const Category = require("./Category");
const Products = require("./Products");

routes.use("/category", Category);
routes.use("/products", Products);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected to main route" });
});

module.exports = routes;
