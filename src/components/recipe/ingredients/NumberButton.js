import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../../context";
import { MixedNumber } from "../../common";

export const NumberButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <MultiplierButtonDiv
      onClick={() => {
        props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <DisplayDiv
        style={{
          fontSize: layout.fontSize.body,
          color: props.isActive ? theme.background : props.color,
          backgroundColor: props.isActive
            ? props.color
            : isHovered
            ? transparentColor
            : "transparent",
          opacity: props.isActive || isHovered ? 1 : 1, //styles.transparency.underline,
        }}
      >
        <MixedNumber number={props.value} />
      </DisplayDiv>
    </MultiplierButtonDiv>
  );
};

NumberButton.defaultProps = {
  isActive: false,
  gradient: [],
  color: "rgb(125, 125, 0)",
  value: 0,
};

const MultiplierButtonDiv = styled.button`
  // box model
  border-radius: ${styles.borderRadius.button};
  width: 100%;
`;

const DisplayDiv = styled.div`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  align-content: center;
  justify-content: center;

  // box model
  border-radius: ${styles.borderRadius.button};
  width: ${units.rem4};
  height: ${units.rem4};
  margin: ${units.rem0};

  // typography
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
`;
