export default ({ url, params }) => {
  let baseUrl = "";
  baseUrl += `${url}`;
  if (params) {
    baseUrl += "?";
    Object.keys(params).forEach((item, idx) => {
      const newParam = `${item}=${params[item]}`;
      if (idx) {
        baseUrl += "&";
      }

      return (baseUrl += newParam);
    });
  }

  return baseUrl;
};
