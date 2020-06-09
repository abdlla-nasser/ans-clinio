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
    titleLabel: "Follow Up",
    key: "idValue",
    width: 50,
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
    titleLabel: "English",
    width: 120,
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
    titleLabel: "Arabic",
    width: 120,
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
