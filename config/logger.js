class Logger {
  static log(object) {
    console.log(object);
  }

  static debug(object, color = "magenta") {
    switch (color) {
      case "red":
        console.log("\x1b[31m%s\x1b[0m", object);
        break;
      case "green":
        console.log("\x1b[32m%s\x1b[0m", object);
        break;
      case "blue":
        console.log("\x1b[34m%s\x1b[0m", object);
        break;
      case "yellow":
        console.log("\x1b[33m%s\x1b[0m", object);
        break;
      case "magenta":
        console.log("\x1b[35m%s\x1b[0m", object);
        break;
      case "cyan":
        console.log("\x1b[36m%s\x1b[0m", object);
        break;
      default:
        console.log(object);
        break;
    }
  }

  static error(object) {
    Logger.log("================================================ ❗Error❗\n");
    console.log("\x1b[31m%s\x1b[0m", object);
    Logger.log("================================================ ❗Error❗\n");
  }

  static object(object) {
    Logger.log("═════════════════════════════════════════════════════════\n");
    Logger.log(object);
    Logger.log("═════════════════════════════════════════════════════════\n");
  }
}

module.exports = Logger;
