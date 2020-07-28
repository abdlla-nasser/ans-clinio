import React from 'react';
import { CircleDiv } from '../styled';

const countDivStyle = {
  display: "flex",
  position: "relative",
}
const svgImgStyle = (size) => {
  return {
    position: "relative",
    top: "2px",
    left: "-8px",
    width: `${size - 10}px`,
    height: `${size - 10 + 9}px`
  }
}

export default ({ num, image, size = 50 }) => {
  return (
    <div style={countDivStyle}>
      <CircleDiv size={size}>{num}</CircleDiv>
      <img style={svgImgStyle(size)} src={image} alt=""/>
    </div>
  )
}