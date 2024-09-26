const bodyValidator = (schema) => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      await schema.validateAsync(data, { abortEarly: false });
    } catch (exception) {
      const error = {};

      exception.details.map((value, index) => {
        error[value.context.key] = value.message;
      });

      next({
        data: error,
        message: "Validation Error",
        status_code: 400,
        status: "VALIDATION_FAILED",
      });
    }
  };
};

module.exports = bodyValidator;
