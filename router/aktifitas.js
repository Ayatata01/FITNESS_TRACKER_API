const express = require("express");
const controller = require("../controller/aktifitas");
const Authentication = require("../helper/authentication");

const router = express.Router();

router.get("/", Authentication.VerifyToken, controller.Get);
router.post("/create", Authentication.VerifyToken, controller.Create);
router.put("/:id", Authentication.VerifyToken, controller.Edit);
router.delete("/:id", Authentication.VerifyToken, controller.Delete);

module.exports = router;
