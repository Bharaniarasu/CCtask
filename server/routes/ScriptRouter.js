const express = require("express");
const { creatScript } = require("../controller/scriptController");
const router = express.Router();

router.route("/script").post(creatScript);

module.exports = router;
