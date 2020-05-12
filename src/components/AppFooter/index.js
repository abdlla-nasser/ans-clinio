import React from "react";
import Footer from "./styled";
import Flex from "../Flex";
import { Row, Col } from "antd";

export default ({
  footerTxt = "All Copyrights Reserved Exsys Solutions inc.",
  applybluestyle,
}) => (
  <Footer applybluestyle={applybluestyle ? "true" : ""}>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
  </Footer>
);
