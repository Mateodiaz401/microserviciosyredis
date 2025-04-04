exports.success = (req, res, data, message, status) => {
  const statusCode = status || 200;
  const statusMessage = message || "";
  res.status(statusCode).json({
    error: false,
    status: statusCode,
    message: statusMessage,
    data: data,
  });
};

exports.error = (req, res, message, status) => {
  const statusCode = status || 500;
  const statusMessage = message || "Internal server error";

  res.status(statusCode).send({
    error: true,
    status: statusCode,
    message: statusMessage,
  });
};
