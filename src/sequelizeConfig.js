const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testPostgresDB", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
