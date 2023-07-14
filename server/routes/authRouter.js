const express = require("express");
const {
  createUser,
  getUserProfile,
  deleteUser,
} = require("../controller/authController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");
const router = express.Router();

router.route("/login").post(createUser);
router.route("/user/logout/:id").get(isAuthenticatedUser, deleteUser);
router.route("/myprofile").get(isAuthenticatedUser, getUserProfile);

module.exports = router;
