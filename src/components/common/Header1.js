import React from "react";
import styled from "styled-components";
import { styles } from "./styles";

export const Header1 = (props) => {
  return <Header1Div>{props.text}</Header1Div>;
};

Header1.defaultProps = {
  text: "default text",
};

const Header1Div = styled.h1`
  // typography
  font-size: ${styles.fontSize.h1};
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;
