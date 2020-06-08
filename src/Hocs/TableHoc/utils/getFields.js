export default (fieldsArray, mainObj) => {
  let fields;
  if (fieldsArray) {
    fieldsArray.forEach((key) => {
      if (mainObj) {
        if (mainObj.hasOwnProperty(key)) {
          fields = { ...fields, [key]: mainObj[key] };
        }
      }
    });
  }
  return fields;
};
