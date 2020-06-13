import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const ConsultationSetup = ({ children, labels }) => {
  const pageTitle = labels && labels.cnsltstup;
  return (
    <>
      <PageTitle children={pageTitle} />
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
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
