import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  MixedNumber,
  functions,
  units,
  styles,
  LayoutContext,
} from "../../common";

export const Ingredient = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <IngredientDiv
      style={{
        color: props.color,
        borderColor: transparentColor,
      }}
    >
      <div>{props.ingredient}</div>
      <RowDiv
        style={{
          height: layout.fontSize.h2,
        }}
      >
        <MixedNumber
          number={props.amount}
          color={theme.foreground}
          fontFamily={props.fontFamily}
          isIngredient
        />
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
  transition: color ${styles.transition.body},
    border-color ${styles.transition.body};

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

const Measure = styled.div`
  // box model
  margin-left: ${units.rem1};
  min-width: ${units.rem6};
`;
