import { colors } from "../../utils/theme";
export const baseCss = `
  text-align: center;
  box-shadow: 4px 6.9px 18.7px 2.3px rgba(17, 81, 125, 0.09);
`;

export function renderBg(colortype) {
  let color = colors.appPrimiry;
  switch (colortype) {
    case "primary":
      return (color = colors.appPrimiry);

    case "danger":
      return (color = "#555555");

    case "warning":
      return (color = colors.yellow);

    case "cancel":
      return (color = "#a7a9ac");

    default:
      return color;
  }
}
