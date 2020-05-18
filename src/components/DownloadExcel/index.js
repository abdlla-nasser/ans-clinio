import React from "react";
import { modules } from "react-export-excel";
import Icon from "../Icon";

const { useMemo, memo } = React;

const ExcelFile = modules.ExcelFile;
const ExcelSheet = modules.ExcelSheet;
const ExcelColumn = modules.ExcelColumn;

const MARGIN_END = 7;
const SIZE = 24;

/**
 *
 * @param {Boolean} disabled
 * @param {Array} sheets
 * @param {String} filename
 * @retun JSx.Element
 */
const DownloadExcel = ({
  disabled,
  sheets = [{ dataSet: [], sheetName: "", columns: [] }],
  filename = "Download",
  buttonElement
}) => {
  const donwloadEl = useMemo(
    () =>
      buttonElement || (
        <Icon
          type="file-excel"
          size={SIZE}
          marginend={MARGIN_END}
          disabled={disabled}
        />
      ),
    [disabled, buttonElement]
  );

  return (
    <ExcelFile element={donwloadEl} filename={filename}>
      {sheets &&
        sheets.map(({ dataSet, sheetName, columns = [] }) => (
          <ExcelSheet data={dataSet} name={sheetName} key={sheetName}>
            {columns.map(({ label, value }) => (
              <ExcelColumn label={label} value={value} key={label} />
            ))}
          </ExcelSheet>
        ))}
    </ExcelFile>
  );
};

export default memo(DownloadExcel);
