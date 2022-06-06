import React from "react";
import styled from "styled-components";
import { functions, units, styles } from "../context";

export const MixedNumber = (props) => {
  let fraction = functions.splitFraction(props.number);
  return (
    <MixedNumberDiv
      style={{
        color: props.color ? props.color : null,
        fontFamily: props.fontFamily,
        transition: props.isIngredient
          ? styles.transition.body
          : styles.transition.button,
        margin: props.isIngredient ? null : "auto",
      }}
    >
      {fraction.whole && fraction.whole}
      {fraction.numerator && (
        <Fraction
          style={{
            marginTop: props.isIngredient ? "-" + units.rem0 : 0,
            marginLeft: props.isIngredient ? units.rem0 : 0,
          }}
        >
          <sup
            style={{
              fontFamily: props.fontFamily,
            }}
          >
            {fraction.numerator}
          </sup>
          &frasl;
          <sub
            style={{
              fontFamily: props.fontFamily,
            }}
          >
            {fraction.denominator}
          </sub>
        </Fraction>
      )}
    </MixedNumberDiv>
  );
};

MixedNumber.defaultProps = {
  number: "",
  fontFamily: styles.fontFamily.monospace,
  isIngredient: false,
};

const MixedNumberDiv = styled.div`
  // animation
  transition: inherit; //color ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  height: min-content;
  width: min-content;
`;

const Fraction = styled.div`
  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;
