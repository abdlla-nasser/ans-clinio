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
    <Flag src={getLanguageFlag(listItem.flag)} />
    <Text>{listItem.label}</Text>
  </Flex>
);

const LanguageDropdown = ({
  userSelectedLanguage,
  allOtherUserLanguages,
  changeAppLanguage,
}) => {
  const unselectedLanguages = useCallback(() => {
    let otherLanguagList = [];
    let tempArr = allOtherUserLanguages.filter(
      (lang) => lang.flag !== userSelectedLanguage.flag
    );
    tempArr.map((lang) =>
      otherLanguagList.push({
        item: LangItem(lang),
        onClick: () => changeAppLanguage(lang),
      })
    );
    return otherLanguagList;
    //eslint-disable-next-line
  }, [userSelectedLanguage]);

  return (
    <CountriesDropdown
      selectedLanguage={userSelectedLanguage}
      otherLanguages={unselectedLanguages()}
    />
  );
};

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown)
);
