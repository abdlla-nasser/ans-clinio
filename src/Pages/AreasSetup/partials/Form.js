import React from "react";
import { connect } from "react-redux";
import Select from "../../../components/Select/withlabel";
import Flex from "../../../components/Flex";
import { IconContainer } from "../../../components/Icon/styled";
import Icon from "../../../components/Icon";
import { mapStateToProps, mapDispatchToProps } from "../utils/selectors";

const { memo, useCallback, useEffect } = React;

const FormView = ({
  region,
  regionsList,
  fetchRegionsList,
  onFormChange,
  isPrevEqualCurrentlang,
  fetchData,
  labels,
}) => {
  useEffect(() => {
    if (region) {
      fetchData();
    }
  }, [region, fetchData]);

  useEffect(() => {
    if (!regionsList || !isPrevEqualCurrentlang) {
      fetchRegionsList();
    }
  }, [isPrevEqualCurrentlang, fetchRegionsList, regionsList]);

  const handleFormChange = useCallback(
    (key) => (value) => {
      return onFormChange({ key, value });
    },
    [onFormChange]
  );

  const handleFetchAreas = useCallback(() => {
    if (region) {
      fetchData();
    }
  }, [region, fetchData]);

  return (
    <Flex justify="center" margin="0 0 10px 0">
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
      <IconContainer onClick={handleFetchAreas}>
        <Icon type="search" size={20} color="white" margintop={-1} />
      </IconContainer>
    </Flex>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(FormView));
