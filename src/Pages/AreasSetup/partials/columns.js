export const excelColumns = [
  {
    label: "code",
    value: "region_code",
  },
  {
    label: "english",
    value: "en",
  },
  {
    label: "arabic",
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
    titleLabel: "code",
    key: "idValue",
    width: "5%",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "region_code",
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
