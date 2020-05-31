export const columns = () => [
  {
    titleLabel: "ID",
    width: 20,
    key: "id",
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
        dIdxs: "followUp",
      },
    },
  },
  {
    titleLabel: "English",
    width: 120,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "english",
      },
    },
  },
  {
    titleLabel: "Arabic",
    width: 120,
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "arabic",
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
