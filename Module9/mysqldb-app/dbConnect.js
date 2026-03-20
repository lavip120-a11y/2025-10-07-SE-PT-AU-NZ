"use strict";

const { Sequelize } = require("sequelize"); //import sequelize
// Sequelize is a package that abstracts out the need to write SQL queries, relying instead on their models to do it for you
//getting information to use from .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);
//calling asynchronous funvtion to connect to mysql. calling authenticate which connects as well,
//if successful it will log successful connection, it will pick up the database name in the .env file and print in console,
// if not error message shown.
const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Successful connection to MySQL Database
${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1);
  }
};

connectMysql();

module.exports = {
  Sequelize: sequelize,
};
