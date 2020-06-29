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
  service_group,
  serviceGroupsList,
  fetchServiceGroupsList,
  onFormChange,
  isPrevEqualCurrentlang,
  fetchData,
  labels,
}) => {
  const canSearch = country && service_group;

  useEffect(() => {
    if (!countryList || (countryList && !isPrevEqualCurrentlang)) {
      fetchCountryList();
    }
  }, [isPrevEqualCurrentlang, countryList, fetchCountryList]);

  useEffect(() => {
    if (!serviceGroupsList || (serviceGroupsList && !isPrevEqualCurrentlang)) {
      fetchServiceGroupsList();
    }
  }, [isPrevEqualCurrentlang, serviceGroupsList, fetchServiceGroupsList]);

  const handleFormChange = useCallback(
    (name) => (value) => {
      return onFormChange({ name, value });
    },
    [onFormChange]
  );

  const handleFetchSystemServices = useCallback(() => {
    if (canSearch) {
      onFormChange({ name: "dataSource", value: [] });
      fetchData();
    }
  }, [fetchData, canSearch, onFormChange]);

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
        label={labels && labels.srvcgrp}
        labelFlex={0.6}
        width="380px"
        inputProps={{
          value: service_group,
          options: serviceGroupsList,
          onChange: handleFormChange("service_group"),
        }}
      />
      <IconContainer
        onClick={handleFetchSystemServices}
        setDisabledBg={!canSearch}
      >
        <Icon
          type="search"
          size={20}
          color="white"
          margintop={-1}
          disabled={!canSearch}
        />
      </IconContainer>
    </Flex>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(FormView));
