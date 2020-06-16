export const excelColumns = [
  {
    label: "type",
    value: "type",
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

export const getExcelSheetProps = ({ typeList, dataSource }) => {
  const dataSet = dataSource.map(({ type, name, ...item }) => {
    const el = typeList && typeList.find((item) => item.key === type);
    return {
      ...item,
      ...name,
      type: el ? el.value : "",
    };
  });

  return {
    dataSet,
  };
};

export const columns = [
  {
    titleLabel: "type",
    key: "idValue",
    width: "20%",
    renderView: {
      type: "list",
      renderCell: {
        dIdxs: "type",
        listName: "typeList",
      },
    },
  },
  {
    titleLabel: "english",
    width: "25%",
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
    width: "25%",
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
