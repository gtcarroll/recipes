import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";
import { Ingredient, MultiplierTray, UnitsTray } from ".";
import { Header2, Note } from "../../common";

export const IngredientList = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);

  const setIngredients = (newIngredients, newYields) => {
    props.setState({
      ingredients: newIngredients,
      yields: newYields,
      units: props.units,
    });
  };

  const setUnits = (newUnits) => {
    props.setState({
      ingredients: props.ingredients,
      yields: props.yields,
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
    <IngredientsListDiv
      style={{
        position: layout.name === "desktop" ? "sticky" : null,
        top:
          layout.name === "desktop" ? "calc(" + units.rem4 + " + 3px)" : null,
      }}
    >
      <IngredientsCard
        style={{
          backgroundColor: theme.overlay,
        }}
      >
        <Header2 text="Ingredients" isOffset />
        <Ingredients>{ingredientList}</Ingredients>
        <RowDiv>
          <MultiplierTray
            ingredients={props.originalState.ingredients}
            yields={props.originalState.yields}
            setIngredients={setIngredients}
          />
          <UnitsTray units={props.units} setUnits={setUnits} />
        </RowDiv>
      </IngredientsCard>
      <Note>
        yields <b>{props.yields.amount}</b>{" "}
        {props.yields.amount > 1 && props.yields.plural !== undefined
          ? props.yields.plural
          : props.yields.measure}
      </Note>
    </IngredientsListDiv>
  );
};

IngredientList.defaultProps = {
  ingredients: {},
};

const IngredientsListDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  // box model
  margin-top: ${units.rem2};
  width: calc(100% + 2 * ${units.rem2});
`;

const IngredientsCard = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  gap: ${units.rem1};

  // box model
  box-shadow: ${styles.boxShadow.card};
  border-radius: ${styles.borderRadius.card};
  width: calc(100% - 2 * ${units.rem2});
  padding: ${units.rem2};
  padding-bottom: 0.9rem;
  margin-bottom: ${units.rem2};
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
