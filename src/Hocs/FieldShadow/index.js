import React, { useMemo } from "react";
import { ImageComponent, InputWrapper, ErrorView } from "./styled";

const CreateShadowField = ({ children, image, imgAlt, borderredius, error, resetMargins }) => {
  const imageValue = useMemo(() => {
    return image ? <ImageComponent src={image} alt={imgAlt} /> : null;
  }, [image, imgAlt]);
  return (
    <>
      <InputWrapper borderRadius={borderredius} resetMargins={resetMargins}>
        {imageValue}
        {children}
      </InputWrapper>
      {error && <ErrorView children={error} />}
    </>
  );
};

export default CreateShadowField;
