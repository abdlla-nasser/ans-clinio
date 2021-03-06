import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const MedicationsSetup = ({ children, labels }) => {
  const pageTitle = labels && labels.insurcompstp;
  return (
    <>
      <PageTitle children="T_Medications Setup" />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: MedicationsSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "medicationsSetup",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
