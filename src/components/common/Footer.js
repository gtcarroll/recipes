import React from "react";
import styled from "styled-components";
import { units, styles } from "../context";

export const Footer = (props) => {
  return <FooterDiv></FooterDiv>;
};

Footer.defaultProps = {};

const FooterDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  height: ${units.rem5};
`;
