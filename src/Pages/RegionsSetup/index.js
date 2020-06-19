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

const RegionsSetup = ({ children, labels, isPrevEqualCurrentlang }) => {
  const pageTitle = (labels && labels.insurcompstp) || "T_Regions Setup";
  return (
    <>
      <PageTitle children={pageTitle} />
      <Form isPrevEqualCurrentlang={isPrevEqualCurrentlang} />
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
  noFetchData: true,
  renderColumns: columns,
  pageName: "regionsSetup",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
