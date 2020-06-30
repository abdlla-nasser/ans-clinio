import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const LanguagesSetup = ({ children, labels }) => {
  const pageTitle = labels && labels.langsstp;
  return (
    <>
      <PageTitle children={pageTitle} />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: LanguagesSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "languagesSetup",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
