const axios = require("axios");
const fs = require("fs");
const Category = require("express").Router();
const url = "/assets/json/categories.json";
Category.get("/deletcategory", function(req, res) {
  const id = req.query.categoryId;
  fs.readFile("categories.json", "utf8", function(err, data) {
    if (err) {
      console.log(err);
    } else {
      let isCateogryPresent = false;
      let categories = JSON.parse(data).categories;
      for (let i = 0; i < categories.length; i++) {
        if (id === categories[i].name) {
          isCateogryPresent = true;
        }
      }
      if (isCateogryPresent) {
        fs.readFile("products.json", "utf8", function(err, data) {
          if (err) {
            console.log(err);
          } else {
            let products = [...JSON.parse(data).products];
            let deletedProducts = [];
            let newProducts = [];
            for (let i = 0; i < products.length; i++) {
              if (products[i].category === id) {
                deletedProducts.push(products[i]);
              } else {
                newProducts.push(products[i]);
              }
            }
            res.send(deletedProducts);
          }
        });
      } else {
        res.send(`Category ${id} is not present`);
      }
    }
     let newData = JSON.stringify({ products: [...newProducts] });
            fs.writeFile("products.json", newData, function(err) {
              if (err) {
                console.log(err);
              } else {
                res.send(deletedProducts);
              }
            });
  });
});
module.exports = Category;
