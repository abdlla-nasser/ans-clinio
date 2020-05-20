import React from "react";
import DropDown from "../DropDown";
import { Flag } from "./styled";
import { getLanguageFlag } from "../../utils/getCountry";

const { memo } = React;

const CountriesDropdown = ({ selectedLanguage, otherLanguages }) => {
  return DropDown({
    button: <Flag src={getLanguageFlag(selectedLanguage.flag)} alt="country" />,
    dataSource: otherLanguages,
    valuePropName: "item",
    buttonProps: {
      style: {
        minWidth: "20px",
      },
    },
  });
};
export default memo(CountriesDropdown);
