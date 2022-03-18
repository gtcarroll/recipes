import React, { useContext } from "react";
import styled from "styled-components";
import { Ingredient, MultiplierButtons } from ".";
import { Header2, ThemeContext, units, styles } from "../../common";

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
      <Ingredients>{ingredientList}</Ingredients>
      <MultiplierButtons
        ingredients={props.originalIngredients}
        setIngredients={props.setIngredients}
      />
    </IngredientListDiv>
  );
};

IngredientList.defaultProps = {
  ingredients: {},
};

const IngredientListDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  gap: ${units.rem1};

  // box model
  box-shadow: ${styles.boxShadow.card};
  border-radius: ${styles.borderRadius.card};
  width: 100%;
  max-width: ${styles.width.content};
  padding: ${units.rem2};
  padding-bottom: 0.9rem;
`;

const Ingredients = styled.div`
  // typography
  font-size: ${styles.fontSize.body};
  font-family: ${styles.fontFamily.monospace};
`;
