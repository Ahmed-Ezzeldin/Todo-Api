const errorMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.isSuccess = error.isSuccess || false;
  if (process.env.APP_ENV == "Development") {
    sendErrorForDev(error, res);
  } else {
    sendErrorForPro(error, res);
  }
};

const sendErrorForDev = (error, res) => {
  return res.status(error.statusCode).json({
    error: error,
    statusCode: error.statusCode,
    isSuccess: error.isSuccess,
    message: error.message,
    stack: error.stack,
  });
};
const sendErrorForPro = (error, res) => {
  return res.status(error.statusCode).json({
    statusCode: error.statusCode,
    isSuccess: error.isSuccess,
    message: error.message,
  });
};

module.exports = errorMiddleware;
