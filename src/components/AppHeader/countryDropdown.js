import React from "react";
import DropDown from "../DropDown";
import { FlagImg } from "./styled";
import { getLanguageFlag } from "../../utils/getCountry";

const { memo } = React;

const CountriesDropdown = ({ selectedLanguage, otherLanguages }) => {
  return DropDown({
    button: <FlagImg src={getLanguageFlag(selectedLanguage)} alt="country" />,
    dataSource: otherLanguages,
    valuePropName: "label",
    buttonProps: {
      style: {
        minWidth: "20px",
      },
    },
  });
};
export default memo(CountriesDropdown);
