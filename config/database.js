const mongoose = require("mongoose");
const Logger = require("./logger");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      Logger.debug(`Database Connected: ${conn.connection.host}`);
    })
    .catch((error) => {
      Logger.error(`Database Error: ${error}`);
      process.exit(1);
    });
};
module.exports = dbConnection;
