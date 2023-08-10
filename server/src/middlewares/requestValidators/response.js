import httpResponseMessages from "../../constants/httpResponseMessages.js";
export const error = function error(error, response) {
  let errorMsg;
  if (typeof error === "string") {
    errorMsg = error;
  } else if (error.details[0].type === "string.regex.base") {
    const errorId = error.details[0].message.split(" ");
    errorMsg = `Invalid ${errorId[0]} ${error.details[0].context.value}`;
  } else if (error.details[0].path.length > 1) {
    errorMsg = `${error.details[0].path[0]} ${error.details[0].message}`;
  } else {
    errorMsg = error.details[0].message.replace(/\"/g, "").trim() + "!";
    errorMsg = errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
  }
  return response.status(error.status || 400).json({
    success: false,
    message: httpResponseMessages.BAD_REQUEST,
    error: errorMsg,
  });
};

export default {
  error,
};