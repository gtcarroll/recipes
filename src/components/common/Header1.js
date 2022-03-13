import React from "react";
import styled from "styled-components";
import { units } from "./units";

export const Header1 = (props) => {
  return <Header1Div>{props.text}</Header1Div>;
};

Header1.defaultProps = {
  text: "default text",
};

const Header1Div = styled.h1`
  // typography
  font-size: ${units.fontSize.h1};
  font-family: ${units.fontFamily.sansSerif};
  text-align: center;
`;
