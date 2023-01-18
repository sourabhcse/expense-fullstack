// DataBase  Config File

const Sequelize = require("sequelize");

const db = new Sequelize("node-complete", "root", "210431@rath", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
