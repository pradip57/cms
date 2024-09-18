const express = require("express");

const app = express();

app.use((req, res, next) => {
  next({ message: "Not found", status: "NOT_FOUND", status_code: 404 });
});

app.use((err, req, res, next) => {
  let data = err.data || null;
  let message = err.message || "Internal Error.....";
  let status = err.status || "INTERNAL_ERROR";
  let status_code = err.status_code || 500;

  res.status(status_code).json({
    result: data,
    message: message,
    meta: null,
    status: status,
  });
});

module.exports = app;
