class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (req, res, err) => {
  const { statusCode } = err;
  res.json({
    statusCode,
    message: 'NOT FOUND',
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
