class AuthController {
  register = (req, res, next) => {
    try {
      const data = req.body;
      console.log(data);

      res.status(201).json({
        result: data,
        message: "Register Succesfully done",
        meta: null,
        status: "REGISTER_SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
