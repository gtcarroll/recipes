import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  MixedNumber,
  functions,
  units,
  styles,
} from "../../common";

export const MultiplierButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(props.color, 0.15);
  return (
    <MultiplierButtonDiv
      style={{
        color: props.isActive ? theme.background : props.color,
        //borderColor: isHovered ? props.color : "transparent",
        backgroundColor: props.isActive
          ? props.color
          : isHovered
          ? transparentColor
          : "transparent",
        opacity:
          props.isActive || isHovered ? 1 : styles.transparency.underline,
      }}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <MixedNumber
        number={props.value}
        color={props.isActive ? theme.background : props.color}
      />
    </MultiplierButtonDiv>
  );
};

MultiplierButton.defaultProps = {
  gradient: [],
  color: "rgb(125, 125, 0)",
  value: 0,
};

const MultiplierButtonDiv = styled.button`
  // animation
  transition: ${styles.transition.button};

  // box model
  //border: ${styles.border.button};
  border-radius: ${styles.borderRadius.button};
  width: ${units.rem4};
  height: ${units.rem4};

  // typography
  font-size: ${styles.fontSize.body};
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
`;
