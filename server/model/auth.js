const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Username"],
  },
  given_name: {
    type: String,
    // required: [true, "Please Enter Username"],
  },
  family_name: {
    type: String,
    // required: [true, "Please Enter Username"],
  },
  email: {
    type: String,
    sparse: true,
  },

  picture: {
    type: String,
  },
  verified_: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create json web tokens for log in purpose
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

let userModel = mongoose.model("User", UserSchema);
module.exports = userModel;
