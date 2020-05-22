import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./selectors";
import { getLanguageFlag } from "../../utils/getCountry";
import Flex from "../Flex";
import Text from "../Text";
import CountriesDropdown from "./countryDropdown";
import { Flag } from "./styled";

const { memo, useCallback } = React;

const LangItem = (listItem) => (
  <Flex>
    <Flag src={getLanguageFlag(listItem.language_code)} />
    <Text>{listItem.name}</Text>
  </Flex>
);

const LanguageDropdown = ({
  currentLanguage,
  allLanguages,
  changeAppLanguage,
}) => {
  const unselectedLanguages = useCallback(() => {
    let otherLanguagList = [];
    let tempArr = allLanguages.filter(
      (lang) => lang.language_code !== currentLanguage.language_code
    );
    tempArr.map((lang) =>
      otherLanguagList.push({
        item: LangItem(lang),
        onClick: () => changeAppLanguage(lang),
      })
    );
    return otherLanguagList;
    //eslint-disable-next-line
  }, [allLanguages, currentLanguage]);

  return (
    <CountriesDropdown
      selectedLanguage={currentLanguage}
      otherLanguages={unselectedLanguages()}
    />
  );
};

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown)
);
