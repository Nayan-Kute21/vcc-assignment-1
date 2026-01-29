const express = require("express");
const axios = require("axios");
const app = express();

const USER_SERVICE = process.env.USER_SERVICE || "http://192.168.56.11:5001";
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE || "http://192.168.56.12:5002";

app.get("/users", async (req, res) => {
  const response = await axios.get(`${USER_SERVICE}/users`);
  res.json(response.data);
});

app.get("/products", async (req, res) => {
  const response = await axios.get(`${PRODUCT_SERVICE}/products`);
  res.json(response.data);
});

app.listen(8080, () => {
  console.log("API Gateway running on port 8080");
});
