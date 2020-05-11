const fullWidthScreens = ["home"];

export const isFullWidthRouteScreen = (path) => {
  const res = fullWidthScreens.some((item) => path.includes(item));
  return res ? "true" : "";
};
