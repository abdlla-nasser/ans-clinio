import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";

const InsuranceCompaniesSetup = ({ children }) => {
  return (
    <>
      <h1>Insurance Companies Setup</h1>
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: InsuranceCompaniesSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "insuranceCompaniesSetup",
  rowKey: "idValue",
  itemsPropNamesToValidate: ["en", "ar"],
});
