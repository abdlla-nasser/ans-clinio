export const excelColumns = [
  {
    label: "ISO 2",
    value: "code2",
  },
  {
    label: "ISO 3",
    value: "code3",
  },
  {
    label: "flag",
    value: "flag_url",
  },
  {
    label: "phone",
    value: "phone_code",
  },
  {
    label: "sequence",
    value: "seq",
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
    titleLabel: "ISO 2",
    width: "5%",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "code2",
      },
    },
  },
  {
    titleLabel: "ISO 3",
    width: "5%",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "code3",
      },
    },
  },
  {
    titleLabel: "flag",
    width: "5%",
    renderView: {
      type: "ImageView",
      renderCell: {
        dIdxs: "flag_url",
      },
    },
  },
  {
    titleLabel: "phone",
    width: "10%",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "phone_code",
      },
    },
  },
  {
    titleLabel: "sequence",
    width: "5%",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "seq",
      },
    },
  },
  {
    titleLabel: "english",
    width: "20%",
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
    width: "20%",
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
