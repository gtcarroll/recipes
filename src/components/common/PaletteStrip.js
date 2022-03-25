import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";

export const PaletteStrip = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <GradientContainer
      style={{
        flexDirection: props.reverse ? "row-reverse" : "row",
        background:
          "linear-gradient(to right, " +
          theme.ingredient2 +
          ", " +
          theme.ingredient1 +
          ", " +
          theme.ingredient2 +
          ")",
      }}
    />
  );
};

PaletteStrip.defaultProps = {
  reverse: false,
};

const GradientContainer = styled.div`
  width: 100%;
  height: 3px;

  position: fixed;
  top: 0px;
`;
