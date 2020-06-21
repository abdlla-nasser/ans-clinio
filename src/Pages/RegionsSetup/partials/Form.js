import React from "react";
import { connect } from "react-redux";
import Select from "../../../components/Select/withlabel";
import Flex from "../../../components/Flex";
import { IconContainer } from "../../../components/Icon/styled";
import Icon from "../../../components/Icon";
import { mapStateToProps, mapDispatchToProps } from "../utils/selectors";

const { memo, useCallback, useEffect } = React;

const FormView = ({
  country,
  countryList,
  fetchCountryList,
  onFormChange,
  isPrevEqualCurrentlang,
  fetchData,
  labels,
}) => {
  useEffect(() => {
    if (!countryList || !isPrevEqualCurrentlang) {
      fetchCountryList();
    }
    //eslint-disable-next-line
  }, [isPrevEqualCurrentlang]);

  const handleFormChange = useCallback(
    (key) => (value) => {
      return onFormChange({ key, value });
    },
    [onFormChange]
  );

  const handleFetchRegions = useCallback(() => {
    if (country) {
      fetchData();
    }
    //eslint-disable-next-line
  }, [country]);

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
        }}
      />
      <IconContainer onClick={handleFetchRegions}>
        <Icon type="search" size={20} color="white" margintop={-1} />
      </IconContainer>
    </Flex>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(FormView));
