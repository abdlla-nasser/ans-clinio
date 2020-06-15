import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const AllergiesSetup = ({ children, labels }) => {
  const pageTitle = labels && labels.alrgsstp;
  return (
    <>
      <PageTitle children={pageTitle} />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: AllergiesSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "allergiesSetup",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
