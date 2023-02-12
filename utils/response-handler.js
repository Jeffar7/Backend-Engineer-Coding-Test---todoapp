const responseData = function (response, statusCode, values) {
  var data = {
    success: "Success",
    message: "Success",
    data: values,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseIdNotFound = function (response, statusCode, id) {
  var data = {
    status: "Not Found",
    message: `Activity With ID ${id} Not Found`,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseError = function (response, statusCode, error) {
  var data = {
    status: "fail",
    message: error,
  };
  response.status(statusCode).json(data);
  response.end();
};

module.exports = {
  responseData,
  responseIdNotFound,
  responseError,
};
