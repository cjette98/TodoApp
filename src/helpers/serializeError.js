export const serializeError = error => {
  if (error.data.code === 401) {
    return {
      message: error.data.message,
      code: error.data.code,
    };
  } else {
    return {
      message: error.data.message,
      code: error.data.code,
    };
  }
};
