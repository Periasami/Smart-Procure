const successResponse = (res, data = {}, message = "Operation successful") => {
  return res.status(200).json({
    success: true,
    data,
    message,
  });
};

const errorResponse = (
  res,
  code = "BAD_REQUEST",
  message = "Something went wrong",
  statusCode = 400
) => {
  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
    },
  });
};

module.exports = {
  successResponse,
  errorResponse,
};