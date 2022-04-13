import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext, MixedNumber, functions, LayoutContext } from "../common";
import { styles, units } from "../common/styles";

export const RadioButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let transparentColor = functions.addAlpha(props.color, 0.15);
  return (
    <RadioButtonDiv
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
      onClick={() => {
        props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Label>{props.label}</Label>
    </RadioButtonDiv>
  );
};

RadioButton.defaultProps = {
  isActive: false,
  gradient: [],
  color: "rgb(125, 125, 0)",
  value: "0",
  label: "0",
};

const RadioButtonDiv = styled.button`
  // animation
  transition: ${styles.transition.button};

  // box model
  border-radius: ${styles.borderRadius.button};
  width: ${units.rem4};
  height: ${units.rem4};

  // typography
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
`;

const Label = styled.div`
  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // typography
  white-space: nowrap;

  // children
  svg {
    width: ${units.rem3};
    height: ${units.rem3};
  }
`;
