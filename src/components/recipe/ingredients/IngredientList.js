import React, { useContext } from "react";
import styled from "styled-components";
import { Ingredient, MultiplierButtons } from ".";
import { Header2, ThemeContext, units } from "../../common";

export const IngredientList = (props) => {
  const { theme } = useContext(ThemeContext);
  let ingredientList = props.ingredients.map((item, i) => {
    return <Ingredient key={i} color={props.gradient[i]} {...item} />;
  });

  return (
    <IngredientListDiv
      style={{
        backgroundColor: theme.overlay,
      }}
    >
      <Header2 text="Ingredients" isOffset />
      {ingredientList}
      <MultiplierButtons />
    </IngredientListDiv>
  );
};

IngredientList.defaultProps = {
  ingredients: {},
};

const IngredientListDiv = styled.div`
  // animation
  transition-duration: ${units.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  gap: ${units.rem1};

  // box model
  box-shadow: ${units.boxShadow.card};
  border-radius: ${units.rem1};
  width: 100%;
  max-width: ${units.width.content};
  padding: ${units.rem2};

  // typography
  font-family: ${units.fontFamily.monospace};
`;
