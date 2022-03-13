import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import { units } from "./units";

export const Header2 = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Header2Div
      style={{
        color: theme.background,
        backgroundColor: theme.instruction,
        marginTop: props.isOffset ? "-2.4rem" : "0",
      }}
    >
      {props.text}
    </Header2Div>
  );
};

Header2.defaultProps = {
  text: "default text",
  isOffset: false,
};

const Header2Div = styled.h2`
  // box model
  margin: auto;
  border-radius: ${units.rem0};
  width: 100%;
  max-width: ${units.width.h2};
  height: ${units.height.bubble};
  padding-top: ${units.px1};
  padding-bottom: ${units.px0};

  // typography
  font-size: ${units.fontSize.h2};
  font-family: ${units.fontFamily.sansSerif};
  text-align: center;
`;
