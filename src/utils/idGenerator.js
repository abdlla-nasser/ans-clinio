export default (length = 8) => {
  length = length || 8;

  let uniqueId = "";
  const timestamp = +new Date();

  const _getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const ts = timestamp.toString();
  const parts = ts.split("").reverse();
  for (let i = 0; i < length; ++i) {
    const index = _getRandomInt(0, parts.length - 1);
    uniqueId += parts[index];
  }

  return uniqueId;
};
