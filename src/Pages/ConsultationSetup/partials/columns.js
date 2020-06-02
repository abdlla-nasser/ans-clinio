export const columns = () => [
  {
    titleLabel: "ID",
    width: 20,
    key: "_id",
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "id",
      },
    },
  },
  {
    titleLabel: "Follow Up",
    width: 80,
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
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "name",
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values["en"],
        }),
      },
    },
  },
  {
    titleLabel: "Arabic",
    width: 120,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "name",
        isRtl: true,
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values["ar"],
        }),
      },
    },
  },
  {
    titleLabel: "French",
    width: 120,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "french",
      },
    },
  },
];
