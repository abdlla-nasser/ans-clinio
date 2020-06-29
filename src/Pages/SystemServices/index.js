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

const SystemServices = ({ children, labels, isPrevEqualCurrentlang }) => {
  const pageTitle = labels && labels.systmsrvcs;
  return (
    <>
      <PageTitle children={pageTitle} />
      <Form isPrevEqualCurrentlang={isPrevEqualCurrentlang} />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: SystemServices,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  noFetchData: true,
  renderColumns: columns,
  pageName: "systemServices",
  rowKey: "idValue",
  requiredProps: ["labels"],
  itemsPropNamesToValidate: ["en", "ar"],
});
