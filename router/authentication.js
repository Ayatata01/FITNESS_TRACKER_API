const express = require("express");
const controller = require("../controller/authentication");

const router = express.Router();

router.get("/login", controller.Login);
router.post("/register", controller.Register);

module.exports = router;
