const mongoose = require("mongoose");

const FoodEntrySchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  foodDetails: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: "Pending" }, // Pending, Approved, Delivered
});

module.exports = mongoose.model("FoodEntry", FoodEntrySchema);
