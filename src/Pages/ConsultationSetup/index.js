import WithTableHoc from "../../Hocs/TableHoc";
import { columns } from "./partials/columns";

const ConsultationSetup = ({ children }) => children;

export default WithTableHoc({
  WrappedComponent: ConsultationSetup,
  renderColumns: columns,
  width: "100%",
  pageName: "consultationSetup",
});
