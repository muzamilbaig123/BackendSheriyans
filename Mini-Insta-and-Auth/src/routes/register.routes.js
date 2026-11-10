const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/register.controller");
const { authenticate } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", registerController);

router.get("/login", authenticate, loginController);

module.exports = router;
