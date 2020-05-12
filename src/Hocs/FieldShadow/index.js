import React from "react";
import { ImageComponent, InputWrapper, ErrorView } from "./styled";

const { Fragment, useMemo } = React;

const CreateShadowField = ({
  children,
  image,
  imgAlt,
  borderredius,
  error,
  resetMargins,
}) => {
  const imageValue = useMemo(() => {
    return image ? <ImageComponent src={image} alt={imgAlt} /> : null;
  }, [image, imgAlt]);

  return (
    <Fragment>
      <InputWrapper borderredius={borderredius} resetMargins={resetMargins}>
        {imageValue}

        {children}
      </InputWrapper>

      {error && <ErrorView children={error} />}
    </Fragment>
  );
};

export default CreateShadowField;
