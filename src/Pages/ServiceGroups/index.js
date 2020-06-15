import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const ServiceGroups = ({ children, labels }) => {
  const pageTitle = labels && labels.srvcgrps;
  return (
    <>
      <PageTitle children={pageTitle} />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: ServiceGroups,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "serviceGroups",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
