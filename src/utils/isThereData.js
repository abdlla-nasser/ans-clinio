const isArrayHasData = arr => Array.isArray(arr) && !!arr.length;

const isObjHasData = obj =>
  Boolean(obj) && typeof obj === "object" && !!Object.keys(obj).length;

export { isArrayHasData, isObjHasData };
