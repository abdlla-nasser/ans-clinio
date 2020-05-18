import WithTableHoc from "../../Hocs/TableHoc";

const renderColumns = () => [
  {
    titleLabel: "idno",
    sorter: true,
    width: 120,
    dataIdxSearch: "punish_id",
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "punish_id",
      },
    },
  },
  {
    titleLabel: "engname",
    sorter: true,
    width: 350,
    dataIdxSearch: "description_p",
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "description_p",
      },
    },
  },
  {
    titleLabel: "arname",
    sorter: true,
    width: 350,
    dataIdxSearch: "description_s",
    renderView: {
      type: "popover",
      renderCell: {
        dIdxs: "description_s",
      },
    },
  },
  {
    titleLabel: "punshtyp",
    sorter: true,
    renderView: {
      type: "list",
      renderCell: {
        dIdxs: "punish_type",
        listName: "punishTypeList",
      },
    },
  },
];

const ClinicalSpecialitiesSetup = ({ children }) => {
  return children;
};

export default WithTableHoc({
  WrappedComponent: ClinicalSpecialitiesSetup,
  renderColumns,
  rowKey: "punish_id",
  width: "100%",
  pageName: "clinicalSpecialitiesSetup",
});
