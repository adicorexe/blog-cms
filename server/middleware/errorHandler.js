function errorHandler(error, req, res, next) {
  console.error(error.message);
  const status = error.statusCode || (error.name === 'ValidationError' ? 400 : 500);
  res.status(status).json({ message: error.message || 'Server error' });
}
module.exports = errorHandler;
