import React, { useEffect } from "react";
import WithTableHoc from "../../Hocs/TableHoc";
import { columns, getExcelSheetProps } from "./partials/columns";
import {
  mapStateToProps,
  mapDispatchToProps,
  actions,
} from "./utils/selectors";
import PageTitle from "../../components/Text/PageTitle";

const ServiceGroups = ({
  children,
  labels,
  isPrevEqualCurrentlang,
  specialityList,
  fetchSpecialityList,
}) => {
  const pageTitle = labels && labels.srvcgrps;

  useEffect(() => {
    if (!specialityList || !isPrevEqualCurrentlang) {
      fetchSpecialityList();
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
  WrappedComponent: ServiceGroups,
  mapStateToProps,
  mapDispatchToProps,
  getExcelSheetProps,
  actions,
  renderColumns: columns,
  pageName: "serviceGroups",
  rowKey: "idValue",
  itemsPropNamesToValidate: ["en", "ar"],
  requiredProps: ["labels", "specialityList", "fetchSpecialityList"],
});
