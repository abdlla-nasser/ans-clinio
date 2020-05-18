export const matchErrors = (errors, dIdxs, isString) => {
  let result;
  if (errors) {
    if (isString) {
      result = errors[dIdxs];
    } else {
      dIdxs.forEach(key => {
        if (errors.hasOwnProperty(key)) {
          const error = errors[key];
          if (error) result = error;
        }
      });
    }
  }
  return result;
};
