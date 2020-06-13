export const excelColumns = [
  {
    label: "Follow Up",
    value: "followup",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

export const getExcelSheetProps = ({ dataSource }) => {
  const dataSet = dataSource.map(({ name, ...item }) => {
    return {
      ...item,
      ...name,
    };
  });

  return {
    dataSet,
  };
};

export const columns = [
  {
    titleLabel: "followup",
    key: "idValue",
    width: "5%",
    renderView: {
      type: "checkbox",
      renderCell: {
        dIdxs: "followup",
        checkedValue: true,
        getValueForChangedInput: (checked) => (checked ? true : false),
      },
    },
  },
  {
    titleLabel: "english",
    width: "30%",
    sorter: true,
    dataIdxSearch: "en",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "name",
        langCode: "en",
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values["en"],
        }),
      },
    },
  },
  {
    titleLabel: "arabic",
    width: "30%",
    sorter: true,
    dataIdxSearch: "ar",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "name",
        langCode: "ar",
        isRtl: true,
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values["ar"],
        }),
      },
    },
  },
];
