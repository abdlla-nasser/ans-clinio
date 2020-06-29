export const excelColumns = [
  {
    label: "group",
    value: "parent",
  },
  {
    label: "price",
    value: "price",
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

export const getExcelSheetProps = ({ serviceGroupsList, dataSource }) => {
  const dataSet = dataSource.map(({ parent, name, ...item }) => {
    const el =
      serviceGroupsList &&
      serviceGroupsList.find((item) => item.key === parent);
    return {
      ...item,
      ...name,
      parent: el ? el.value : "",
    };
  });

  return {
    dataSet,
  };
};

export const columns = [
  // {
  //   titleLabel: "Group",
  //   key: "idValue",
  //   width: "20%",
  //   renderView: {
  //     type: "list",
  //     renderCell: {
  //       dIdxs: "parent",
  //       listName: "serviceGroupsList",
  //     },
  //   },
  // },
  {
    key: "idValue",
    titleLabel: "price",
    width: "5%",
    renderView: {
      type: "inputnumber",
      renderCell: {
        dIdxs: "price",
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
