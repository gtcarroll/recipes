import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, functions, units } from "../../common";

export const MultiplierButton = (props) => {
  const { theme } = useContext(ThemeContext);
  let fraction = functions.splitFraction(props.label);
  return (
    <MultiplierButtonDiv
      style={{
        color: props.isActive ? theme.background : props.color,
        borderColor: props.isActive ? props.color : null,
        backgroundColor: props.isActive ? props.color : "transparent",
        opacity: props.isActive ? 1 : null,
        //borderRadius: props.isActive ? "50%" : null, //units.rem0 : null,
      }}
      onClick={props.onClick}
    >
      {fraction.whole && fraction.whole}
      {fraction.numerator && (
        <Fraction>
          <sup>{fraction.numerator}</sup>
          &frasl;
          <sub>{fraction.denominator}</sub>
        </Fraction>
      )}
    </MultiplierButtonDiv>
  );
};

MultiplierButton.defaultProps = {
  gradient: [],
  color: "rgb(125, 125, 0)",
  label: 0,
};

const Fraction = styled.div`
  // typography:
  font-size: 1.4rem;
  font-weight: bolder;
`;

const MultiplierButtonDiv = styled.button`
  // animation
  transition-duration: ${units.transition.button};

  // box model
  border: solid ${units.px0};
  border-radius: ${units.rem0}; //50%;
  border-color: transparent;
  width: ${units.rem4};
  height: ${units.rem4};

  // typography
  font-size: ${units.fontSize.body};
  font-family: ${units.fontFamily.monospace};
  font-weight: bold;

  // psuedo-classes
  opacity: 0.3;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    //border-radius: 50%; //${units.rem0};
    border-color: white;
  }
`;
