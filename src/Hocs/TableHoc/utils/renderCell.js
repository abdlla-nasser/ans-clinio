import TextInput from "../../../components/Table/columnsComponents/textInputCell";
import CheckBoxCell from "../../../components/Table/columnsComponents/checkBoxCell";
import SelectCell from "../../../components/Table/columnsComponents/SelectCell";
import InputNumber from "../../../components/Table/columnsComponents/numberInput";
import InputPercent from "../../../components/Table/columnsComponents/percentageInput";
import DateInput from "../../../components/Table/columnsComponents/dateCell";
import ImageView from "../../../components/Table/columnsComponents/ImageCell";

const CELLS = {
  text: TextInput,
  checkbox: CheckBoxCell,
  list: SelectCell,
  inputnumber: InputNumber,
  inputpercent: InputPercent,
  date: DateInput,
  image: ImageView,
};

export default ({
  renderView,
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  errors,
  ...others
}) => {
  if (renderView) {
    const { type, renderCell } = renderView;
    let comp = CELLS[type];
    if (type && comp && renderCell) {
      return {
        render: comp({
          rowKey,
          selectedRow,
          isEditing,
          onChange,
          errors,
          renderCell,
          ...others,
        }),
      };
    }
  } else return null;
};
