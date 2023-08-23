class Logger {
  static log(object, color = "magenta") {
    switch (color) {
      case "red":
        console.log("\x1b[31m%s\x1b[0m", object);
        break;
      case "green":
        console.log("\x1b[32m%s\x1b[0m", object);
        break;
      case "yellow":
        console.log("\x1b[33m%s\x1b[0m", object);
        break;
      case "blue":
        console.log("\x1b[34m%s\x1b[0m", object);
        break;
      case "magenta":
        console.log("\x1b[35m%s\x1b[0m", object);
        break;
      case "cyan":
        console.log("\x1b[36m%s\x1b[0m", object);
        break;
      default:
        console.log("\x1b[35m%s\x1b[0m", object);
        break;
    }
  }
}

module.exports = Logger;
