import React from "react";
import { ButtonImg, Input, Wraper } from "./styled";
import UploadImg from "../../assets/images/cameraUpload.png";
import getbase64 from "../../utils/getImgBase64";

const { memo, useCallback } = React;

const Upload = ({ noBase64, onChange, name, multiple, children }) => {
  const onUpload = useCallback(
    ({ target: { files, name } }) => {
      return noBase64
        ? onChange(files, name)
        : getbase64({ files, multiple }, (imgsFiles) => {
            if (onChange) {
              if (name) {
                return onChange({ name, value: imgsFiles });
              } else return onChange(imgsFiles);
            }
          });
    },
    [onChange, multiple, noBase64]
  );

  return (
    <Wraper>
      {children || <ButtonImg src={UploadImg} alt="upload-patient" />}
      <Input
        accept=".png, .jpg, .jpeg"
        onChange={onUpload}
        type="file"
        name={name}
        multiple={multiple}
      />
    </Wraper>
  );
};

export default memo(Upload);
