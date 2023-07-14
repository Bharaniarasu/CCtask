const userModel = require("../model/auth");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
//authentication for access
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  console.log("CCOOKIE -->", req.cookies);
  const { CCToken } = req.cookies;

  if (!CCToken) {
    next(new ErrorHandler("Login To get User Data"), 401);
  }

  const decode = jwt.verify(CCToken, process.env.JWT_SECRET);

  console.log("decode - > ", decode);
  //upcoming middlewares can access the req.user
  req.user = await userModel.findById(decode.id);
  console.log("user  ", req.user);
  next();
});
