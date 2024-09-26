const { setPath, uploader } = require("../../middleware/uploader.middleware");
const bodyValidator = require("../../middleware/validator.middleware");
const { registerDTO } = require("./auth.contract");
const authCtrl = require("./auth.controller");

const authRouter = require("express").Router();

authRouter.post(
  "/register",
  setPath("/users"),
  uploader.single("image"),
  bodyValidator(registerDTO),
  authCtrl.register
);

module.exports = authRouter;
