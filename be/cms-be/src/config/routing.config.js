const authRouter = require("../modules/auth/auth.router");

const mainRouter = require("express").Router();

mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
