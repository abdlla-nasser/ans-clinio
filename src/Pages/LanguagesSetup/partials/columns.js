export const excelColumns = [
  {
    label: "code",
    value: "language_code",
  },
  {
    label: "r2l",
    value: "r2l",
  },
  {
    label: "langname",
    value: "name",
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
        dIdxs: "language_code",
      },
    },
  },
  {
    titleLabel: "direction",
    width: "5%",
    renderView: {
      type: "switch",
      renderCell: {
        dIdxs: "r2l",
        checkedValue: true,
        getValueForChangedInput: (checked) => (checked ? true : false),
        checkedChildren: "RTL",
        unCheckedChildren: "LTR",
      },
    },
  },
  {
    titleLabel: "langname",
    width: "30%",
    renderView: {
      type: "text",
      renderCell: {
        dIdxs: "name",
      },
    },
  },
];
