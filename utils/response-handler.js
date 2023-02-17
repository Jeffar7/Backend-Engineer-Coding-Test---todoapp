const responseData = function (response, statusCode, values) {
  var data = {
    status: "Success",
    message: "Success",
    data: values,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseDataTodo = function (response, statusCode, values) {
  var data = {
    status: "Success",
    message: "Success",
    data: values,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseDataCannotBeNull = function (
  response,
  statusCode,
  status,
  message
) {
  var data = {
    status: status,
    message: message,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseIdTodoNotFound = function (response, statusCode, id) {
  var data = {
    status: "Not Found",
    message: `Todo with ID ${id} Not Found`,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseIdNotFound = function (response, statusCode, id) {
  var data = {
    status: "Not Found",
    message: `Activity with ID ${id} Not Found`,
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
  responseIdTodoNotFound,
  responseDataCannotBeNull,
  responseDataTodo,
};
