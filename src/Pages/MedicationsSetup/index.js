import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const InsuranceCompaniesSetup = ({ children, labels }) => {
  const pageTitle = labels && labels.insurcompstp;
  return (
    <>
      <PageTitle children={pageTitle} />
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
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
