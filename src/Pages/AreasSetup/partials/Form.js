import React from "react";
import { connect } from "react-redux";
import Select from "../../../components/Select/withlabel";
import Flex from "../../../components/Flex";
import { IconContainer } from "../../../components/Icon/styled";
import Icon from "../../../components/Icon";
import { mapStateToProps, mapDispatchToProps } from "../utils/selectors";
import { usePrevious } from "../../../utils/customUseHooks";

const { memo, useCallback, useEffect } = React;

const FormView = ({
  country,
  countryList,
  fetchCountryList,
  region,
  regionsList,
  fetchRegionsList,
  onFormChange,
  isPrevEqualCurrentlang,
  fetchData,
  labels,
}) => {
  const prevCountryValue = usePrevious(country);
  const isCountryValueChanged = country && country !== prevCountryValue;

  useEffect(() => {
    if (!countryList || (countryList && !isPrevEqualCurrentlang)) {
      fetchCountryList();
    }
  }, [isPrevEqualCurrentlang, countryList, fetchCountryList]);

  useEffect(() => {
    if (isCountryValueChanged || (regionsList && !isPrevEqualCurrentlang)) {
      fetchRegionsList();
    }
  }, [
    isPrevEqualCurrentlang,
    fetchRegionsList,
    regionsList,
    isCountryValueChanged,
  ]);

  useEffect(() => {
    if (region) {
      fetchData();
    }
    //eslint-disable-next-line
  }, []);

  const handleFormChange = useCallback(
    (name) => (value) => {
      return onFormChange({ name, value });
    },
    [onFormChange]
  );

  const handleFetchAreas = useCallback(() => {
    if (region) {
      onFormChange({ name: "dataSource", value: [] });
      fetchData();
    }
  }, [region, fetchData, onFormChange]);

  return (
    <Flex justify="center" margin="0 0 10px 0">
      <Select
        label={labels && labels.country}
        labelFlex={0.4}
        width="300px"
        inputProps={{
          value: country,
          options: countryList,
          onChange: handleFormChange("country"),
          style: {
            marginInlineEnd: "30px",
          },
        }}
      />
      <Select
        label={labels && labels.region}
        labelFlex={0.4}
        width="300px"
        inputProps={{
          value: region,
          options: regionsList,
          onChange: handleFormChange("region"),
        }}
      />
      <IconContainer onClick={handleFetchAreas} setDisabledBg={!region}>
        <Icon
          type="search"
          size={20}
          color="white"
          margintop={-1}
          disabled={!region}
        />
      </IconContainer>
    </Flex>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(FormView));
