import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import loadable from "../../components/Loadable";

const PageTitle = loadable(() => import("../../components/Text/PageTitle"));
const Form = loadable(() => import("./partials/Form"));

const RegionsSetup = ({ children, labels }) => {
  const pageTitle = (labels && labels.insurcompstp) || "T_Regions Setup";
  return (
    <>
      <PageTitle children={pageTitle} />
      <Form />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: RegionsSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "regionsSetup",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
