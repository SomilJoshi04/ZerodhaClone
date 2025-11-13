require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { holdingsModel } = require("./model/HoldingsModel");
const { positionsModel } = require("./model/PositionsModel");
const { ordersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(bodyParser.json());



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await holdingsModel.find({}); //database me se holding ke data ko fetch krna dashboard me 
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await positionsModel.find({}); // database me se Position ke data ko fetch krna dashboard me 
  res.json(allPositions);
});

// orders Collection
app.post("/newOrder", async (req, res) => {
  let newOrder = new ordersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved!");
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(url);
  console.log("Connection Successful");
});
