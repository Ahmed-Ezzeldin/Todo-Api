const mongoose = require("mongoose");
const Logger = require("./logger");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      Logger.debug(`Database Connected: ${conn.connection.host}`);
    })
    .catch((error) => {
      Logger.error(`Database Error: ${error}`);
      process.exit(1);
    });
};
module.exports = dbConnection;