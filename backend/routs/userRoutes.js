const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Admin setup
const ADMIN_EMAIL = "amitpandey7607297@gmail.com";
const ADMIN_MOBILE = "7607297771";
const ADMIN_PASSWORD = bcrypt.hashSync("admin123", 10);

// Create admin on first run
router.get("/setup", async (req, res) => {
  try {
    const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
    if (!existingAdmin) {
      const admin = new User({
        name: "Admin",
        email: ADMIN_EMAIL,
        mobile: ADMIN_MOBILE,
        password: ADMIN_PASSWORD,
        role: "admin",
      });
      await admin.save();
      return res.send("Admin created");
    }
    res.send("Admin already exists");
  } catch (error) {
    res.status(500).send("Error setting up admin");
  }
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user._id, role: user.role }, "secret", { expiresIn: "1h" });
      return res.json({ token, role: user.role });
    }
    res.status(400).send("Invalid credentials");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
