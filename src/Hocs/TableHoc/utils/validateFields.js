export default (obj) => {
  if (obj) {
    const keys = Object.keys(obj);
    let errors;
    keys.forEach((key) => {
      const value = obj[key];
      if (!value) {
        errors = { ...errors, [key]: `Please set ${key} value` };
      }
    });

    return errors;
  }

  return false;
};
