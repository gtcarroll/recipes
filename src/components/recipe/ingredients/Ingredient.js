import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, functions, units } from "../../common";

export const Ingredient = (props) => {
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  let fraction = functions.splitFraction(props.amount);
  return (
    <IngredientDiv
      style={{
        color: props.color,
        borderColor: transparentColor,
      }}
    >
      <div>{props.ingredient}</div>
      <RowDiv>
        <Number
          style={{
            color: theme.foreground,
          }}
        >
          {fraction.whole && fraction.whole}
          {fraction.numerator && (
            <Fraction>
              <sup>{fraction.numerator}</sup>
              &frasl;
              <sub>{fraction.denominator}</sub>
            </Fraction>
          )}
        </Number>
        <Measure>{props.measure}</Measure>
      </RowDiv>
    </IngredientDiv>
  );
};

Ingredient.defaultProps = {
  color: "rgb(255, 125, 0)",
  amount: false,
  measure: false,
  ingredient: false,
};

const IngredientDiv = styled.div`
  // animation
  transition-duration: ${units.transition.body};

  // flexbox
  display: flex;
  justify-content: space-between;

  // box model
  margin-top: ${units.rem1};
  border-bottom: ${units.px0} solid;
  width: 100%;

  // typography
  font-weight: bold;
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  height: ${units.rem3};
`;

const Number = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  margin-left: ${units.rem1};
  margin-right: ${units.rem1};
`;

const Fraction = styled.div`
  // box model
  margin-top: -${units.rem0};
  margin-left: ${units.rem0};
`;

const Measure = styled.div`
  // box model
  min-width: ${units.rem6};
`;
