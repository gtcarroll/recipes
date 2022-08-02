import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../../context";
import { MixedNumber } from "../../common";

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
      {props.url ? (
        <Link
          to={"/recipes/" + props.url}
          target="_blank"
          style={{
            color: props.color,
          }}
        >
          {props.ingredient} <UnicodeSpan>→</UnicodeSpan>
        </Link>
      ) : (
        <div>{props.ingredient}</div>
      )}
      <RowDiv
        style={{
          height: layout.fontSize.h2,
        }}
      >
        <MixedNumber
          number={props[props.units]?.amount}
          color={theme.foreground}
          fontFamily={props.fontFamily}
          isIngredient
        />
        <Measure
          style={{
            minWidth: props.units === "metric" ? units.rem5 : units.rem6,
          }}
        >
          {props[props.units]?.measure}
        </Measure>
      </RowDiv>
    </IngredientDiv>
  );
};

Ingredient.defaultProps = {
  color: "rgb(255, 125, 0)",
  amount: false,
  measure: false,
  ingredient: false,
  units: "imperial",
};

const UnicodeSpan = styled.span`
  // typography
  font-family: ${styles.fontFamily.monospace};
`;

const IngredientDiv = styled.li`
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
  // animation
  transition: min-width ${styles.transition.body};

  // box model
  margin-left: ${units.rem1};
`;
