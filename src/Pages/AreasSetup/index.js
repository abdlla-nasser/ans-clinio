import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import loadable from "../../components/Loadable";

const { useEffect } = React;
const PageTitle = loadable(() => import("../../components/Text/PageTitle"));
const Form = loadable(() => import("./partials/Form"));

const AreasSetup = ({
  children,
  labels,
  isPrevEqualCurrentlang,
  location: { state },
  onFormChange,
}) => {
  const pageTitle = (labels && labels.regnsstp) || "T_Areas Setup";

  useEffect(() => {
    if (state && state.fromPrevPage) {
      onFormChange({ key: "region", value: state.fromPrevPage });
    }
  }, [onFormChange, state]);

  return (
    <>
      <PageTitle children={pageTitle} />
      <Form isPrevEqualCurrentlang={isPrevEqualCurrentlang} />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: AreasSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  noFetchData: true,
  renderColumns: columns,
  pageName: "areasSetup",
  rowKey: "idValue",
  requiredProps: ["labels", "location", "onFormChange"],
  itemsPropNamesToValidate: ["en", "ar"],
});
