import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";

const ConsultationSetup = ({ children }) => {
  return (
    <>
      <h1>Consultation Setup</h1>
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: ConsultationSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "consultationSetup",
  rowKey: "idValue",
  itemsPropNamesToValidate: ["en", "ar"],
});
