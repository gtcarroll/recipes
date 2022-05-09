import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../../context";

export const NumberInput = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let transparentColor = functions.addAlpha(props.color, 0.15);
  return (
    <NumberInputDiv
      value={props.value}
      placeholder="_"
      type="number"
      style={{
        fontSize: layout.fontSize.body,
        color: props.isActive ? theme.background : props.color,
        backgroundColor: props.isActive
          ? props.color
          : isHovered
          ? transparentColor
          : "transparent",
      }}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={(event) => {
        event.target.select();
        setIsHovered(true);
      }}
      onBlur={() => setIsHovered(false)}
    />
  );
};

NumberInput.defaultProps = {
  isActive: false,
  gradient: [],
  color: "rgb(125, 125, 0)",
  value: "0",
  label: "0",
};

const NumberInputDiv = styled.input`
  // animation
  transition: ${styles.transition.button};

  // box model
  border: 0px solid;
  border-radius: ${styles.borderRadius.button};
  width: ${units.rem4};
  height: ${units.rem4};
  margin: ${units.rem0} 0;

  // typography
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
  text-align: center;
  appearance: textfield;

  ::selection {
    /* background: red; */
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: inherit;
    opacity: 1; /* Firefox */
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
