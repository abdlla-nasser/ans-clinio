import { matchErrors } from "./utils";
import DateInput from "../../DateComponent/withlabel";

const DateCell = ({
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  errors,
  renderCell,
}) => (record) => {
  const { [rowKey]: rowKeyValue } = record;
  const { dIdxs, onInputChanged } = renderCell;
  const value = record[dIdxs];
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;

  if (isSameEditableRow) {
    const errs = matchErrors(errors, dIdxs, true);

    const handleChange = (_, selectedDate) => {
      const params = {
        name: dIdxs,
        value: selectedDate,
        key: rowKeyValue,
      };

      return onInputChanged
        ? onInputChanged({
            onChange,
            record,
            ...params,
          })
        : onChange(params);
    };

    return DateInput({
      marginbottom: 0,
      height: 25,
      width: "100%",
      inputWrapperStyle: {
        justifyContent: "center",
      },
      error: errs,
      inputProps: {
        value: value,
        onChange: handleChange,
        flex: 0.75,
        className: "edit-td-input",
        size: "small",
        defaultValue: null,
      },
    });
  }

  return value || "-";
};

export default DateCell;
