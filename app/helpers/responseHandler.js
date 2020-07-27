exports.getSuccessResponse = (data, msg = "") => {
  return {
    success: true,
    errorCode: 0,
    msg: msg,
    data: Array.isArray(data) ? data: [data],
    errors: [],
  };
};

exports.getFailureResponse = (errors = [], errorConstant, customMsg = "") => {
  const errorCode = errorConstant ? errorConstant.code : 0;
  const msg = errorConstant ? errorConstant.msg : "";

  return {
    success: false,
    errorCode: errorCode,
    msg: customMsg || msg,
    data: [],
    errors: errors,
  };
};
