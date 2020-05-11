import React from "react";
import Footer from "./styled";

export default ({
  footerTxt = "All Copyrights Reserved Exsys Solutions inc.",
  applybluestyle,
  align,
  height,
  children,
}) => (
  <Footer
    height={height}
    align={align}
    applybluestyle={applybluestyle ? "true" : ""}
  >
    {footerTxt}
    {children}
    {/* <label>Release 0.03.29.1518</label> */}
  </Footer>
);
