const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const userModel = require("../model/auth");
//Create New user
exports.createUser = async (req, res, next) => {
  const { name, given_name, family_name, email, picture, verified_ } =
    req.body.userData;

  const user = await userModel.create({
    name,
    given_name,
    family_name,
    email,

    picture,
    verified_,
  });

  const token = user.getJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRY_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(201).cookie("CCToken", token, options).json({
    success: true,
    user,
    token,
  });
  //
};
//Get User Profile -/api/v1/myprofile
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});
//delete user profile - api/v1/user/:id
exports.deleteUser = async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User NOT FOUND",
    });
  } else {
    await user.deleteOne();
    res
      .cookie("CCToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        message: "Logged Out Success",
      });
  }
};
// };
