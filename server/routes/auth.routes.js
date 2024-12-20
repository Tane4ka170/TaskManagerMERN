const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.route("/signin").post(authController.signIn);
router.route("/signup").post(authController.register);

module.exports = router;
