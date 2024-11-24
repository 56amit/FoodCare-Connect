const express = require("express");
const FoodEntry = require("../models/FoodEntry");

const router = express.Router();

// Add a food donation
router.post("/add", async (req, res) => {
  const { donorName, foodDetails, quantity } = req.body;
  try {
    const food = new FoodEntry({ donorName, foodDetails, quantity });
    await food.save();
    res.status(201).send("Food donation added!");
  } catch (error) {
    res.status(500).send("Error adding food donation");
  }
});

// Get all donations
router.get("/", async (req, res) => {
  try {
    const donations = await FoodEntry.find();
    res.json(donations);
  } catch (error) {
    res.status(500).send("Error fetching food donations");
  }
});

module.exports = router;
