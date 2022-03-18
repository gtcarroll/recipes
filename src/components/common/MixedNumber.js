import React from "react";
import styled from "styled-components";
import { functions } from "./functions";
import { units, styles } from "./styles";

export const MixedNumber = (props) => {
  let fraction = functions.splitFraction(props.number);
  return (
    <MixedNumberDiv
      style={{
        color: props.color ? props.color : null,
        fontFamily: props.fontFamily,
      }}
    >
      {fraction.whole && fraction.whole}
      {fraction.numerator && (
        <Fraction
          style={{
            marginTop: props.isIngredient ? "-" + units.rem0 : 0,
            marginLeft: props.isIngredient ? units.rem0 : 0,
            fontSize: props.isIngredient ? null : styles.fontSize.fraction,
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
  number: "1 1/2",
  fontFamily: styles.fontFamily.monospace,
  isIngredient: false,
};

const MixedNumberDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Fraction = styled.div`
  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;
