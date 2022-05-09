import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";
import { Ingredient, MultiplierTray, UnitsTray } from ".";
import { Header2 } from "../../common";

export const IngredientList = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);

  const setIngredients = (newIngredients) => {
    props.setState({
      ingredients: newIngredients,
      units: props.units,
    });
  };

  const setUnits = (newUnits) => {
    props.setState({
      ingredients: props.ingredients,
      units: newUnits,
    });
  };

  let ingredientList = props.ingredients.map((item, i) => {
    return (
      <Ingredient
        key={i}
        color={props.gradient[i]}
        units={props.units}
        {...item}
      />
    );
  });

  return (
    <IngredientListDiv
      style={{
        backgroundColor: theme.overlay,
        position: layout.name === "desktop" ? "sticky" : null,
        top:
          layout.name === "desktop" ? "calc(" + units.rem4 + " + 3px)" : null,
      }}
    >
      <Header2 text="Ingredients" isOffset />
      <Ingredients>{ingredientList}</Ingredients>
      <RowDiv>
        <MultiplierTray
          ingredients={props.originalIngredients}
          setIngredients={setIngredients}
        />
        <UnitsTray units={props.units} setUnits={setUnits} />
      </RowDiv>
    </IngredientListDiv>
  );
};

IngredientList.defaultProps = {
  ingredients: {},
};

const IngredientListDiv = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  gap: ${units.rem1};

  // box model
  margin-top: 1.2rem;
  box-shadow: ${styles.boxShadow.card};
  border-radius: ${styles.borderRadius.card};
  width: 100%;
  padding: ${units.rem2};
  padding-bottom: 0.9rem;
`;

const Ingredients = styled.ul`
  // typography
  font-family: ${styles.fontFamily.monospace};
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
