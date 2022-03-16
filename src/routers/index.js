const studentRouter = require("./studentRouter");

module.exports = (app) => {
  app.use("/api/students", studentRouter);
  app.use("/api/users", studentRouter);
};
