const express = require("express");
const mainRouter = require("./routing.config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v2", mainRouter);

app.use((req, res, next) => {
  next({ status_code: 404, message: "Not Found", status: "NOT_FOUND" });
});

app.use((err, req, res, next) => {
  console.log(err);
  let data = err.data || null;
  let message = err.message || "Internal Error";
  let status_code = err.status_code || 500;
  let status = err.status || "INTERNAL_ERROR";

  res.status(status_code).json({
    resullt: data,
    message: message,
    meta: null,
    status: status,
  });
});

module.exports = app;
