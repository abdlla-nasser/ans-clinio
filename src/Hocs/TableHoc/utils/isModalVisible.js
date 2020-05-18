export default isVisible =>
  isVisible || (typeof isVisible === "number" && isVisible >= 0);
