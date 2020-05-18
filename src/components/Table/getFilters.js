export default filtersObj => {
  let result = {};
  Object.keys(filtersObj).forEach(key => {
    const itemValue = filtersObj[key][0];
    if (itemValue) {
      result = {
        ...result,
        [key]: itemValue
      };
    }
  });
  return result;
};
