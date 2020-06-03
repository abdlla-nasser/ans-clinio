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
    titleLabel: "Follow Up",
    width: 100,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "player",
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
    renderView: {
      type: "popover",
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
  {
    titleLabel: "Turkish",
    width: 120,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "name",
        langCode: "tr",
        getDeepValueInSingleDIndx: ({ values }) => ({
          val: values["tr"],
        }),
      },
    },
  },
];
