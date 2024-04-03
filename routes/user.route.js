const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/add", userController.createUser);
router.post("/login", userController.loginData);

module.exports = router;