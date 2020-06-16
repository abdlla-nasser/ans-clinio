import React from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const { useEffect } = React;

const AllergiesSetup = ({
  children,
  labels,
  isPrevEqualCurrentlang,
  typeList,
  fetchTypeList,
}) => {
  const pageTitle = labels && labels.alrgsstp;

  useEffect(() => {
    if (!typeList || !isPrevEqualCurrentlang) {
      fetchTypeList();
    }
    //eslint-disable-next-line
  }, [isPrevEqualCurrentlang]);

  return (
    <>
      <PageTitle children={pageTitle} />
      {children}
    </>
  );
};

export default WithTableHoc({
  WrappedComponent: AllergiesSetup,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "allergiesSetup",
  rowKey: "idValue",
  itemsPropNamesToValidate: ["en", "ar"],
  requiredProps: ["labels", "typeList", "fetchTypeList"],
});
