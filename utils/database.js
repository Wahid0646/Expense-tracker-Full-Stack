const Sequelize = require("sequelize");
const sequelize = new Sequelize("expense_tracker", "root", "Wahid@0646", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
