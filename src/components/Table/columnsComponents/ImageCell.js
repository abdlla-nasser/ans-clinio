import React from "react";
import UploadImg from "../../../components/Upload";
import Image from "../../Image";

const { Fragment } = React;

const ImageView = ({ rowKey, selectedRow, isEditing, renderCell }) => ({
  [rowKey]: rowKeyValue,
  ...record
}) => {
  const { dIdxs } = renderCell;
  const value = record[dIdxs];
  const isSameEditableRow = isEditing && selectedRow === rowKeyValue;

  return (
    <Fragment>
      {isSameEditableRow ? (
        <UploadImg multiple />
      ) : (
        <Image src={value} alt="No Img" width="45px" height="40px" />
      )}
    </Fragment>
  );
};

export default ImageView;
