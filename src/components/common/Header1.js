import React, { useContext } from "react";
import styled from "styled-components";
import { LayoutContext, units, styles } from "../context";

export const Header1 = (props) => {
  const { layout } = useContext(LayoutContext);
  return (
    <Header1Div
      style={{
        fontSize: layout.fontSize.h1,
        color: props.color,
      }}
    >
      {props.text}
    </Header1Div>
  );
};

Header1.defaultProps = {
  text: "default text",
  color: "",
};

const Header1Div = styled.h1`
  // animation
  transition: ${styles.transition.body};

  // box model
  padding: 0 ${units.rem2};

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;
