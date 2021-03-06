export const excelColumns = [
  {
    label: "speciality",
    value: "speciality_code",
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

export const getExcelSheetProps = ({ specialityList, dataSource }) => {
  const dataSet = dataSource.map(({ speciality_code, name, ...item }) => {
    const el =
      specialityList &&
      specialityList.find((item) => item.key === speciality_code);
    return {
      ...item,
      ...name,
      speciality_code: el ? el.value : "",
    };
  });

  return {
    dataSet,
  };
};

export const columns = [
  {
    titleLabel: "speciality",
    key: "idValue",
    width: "20%",
    renderView: {
      type: "list",
      renderCell: {
        dIdxs: "speciality_code",
        listName: "specialityList",
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
