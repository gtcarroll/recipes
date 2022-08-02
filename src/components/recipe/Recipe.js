import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, functions, units } from "../context";
import { Hero, ContentContainer } from "../common";
import { IngredientList, InstructionList } from ".";
import { MenuCurtain } from "../common";

export const Recipe = (props) => {
  document.title = props.name;
  const [state, setState] = useState({
    ingredients: props.ingredients,
    yields: props.yields,
    units: "imperial",
  });
  const originalState = {
    ingredients: props.ingredients,
    yields: props.yields,
  };
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const gradient = functions.getColorGradient(
    props.ingredients.length,
    theme.ingredient1,
    theme.ingredient2
  );
  return (
    <RecipeDiv>
      <MenuCurtain />
      {layout.name === "mobile" && (
        <Hero
          tags={props.tags}
          text={props.name}
          url={props.url}
          isScreenWidth
        />
      )}
      <RowDiv>
        <ContentContainer width={layout.width.ingredients}>
          {layout.name !== "mobile" && (
            <Hero tags={props.tags} text={props.name} url={props.url} />
          )}
          <IngredientList
            units={state.units}
            ingredients={state.ingredients}
            yields={state.yields}
            setState={setState}
            originalState={originalState}
            gradient={gradient}
          />
          {layout.name !== "desktop" && (
            <InstructionList
              units={state.units}
              ingredients={state.ingredients}
              instructions={props.instructions}
              attribution={props.attribution}
              gradient={gradient}
            />
          )}
        </ContentContainer>
        {layout.name === "desktop" && (
          <ContentContainer width={layout.width.instructions}>
            <InstructionList
              units={state.units}
              ingredients={state.ingredients}
              instructions={props.instructions}
              attribution={props.attribution}
              gradient={gradient}
            />
          </ContentContainer>
        )}
      </RowDiv>
    </RecipeDiv>
  );
};

Recipe.defaultProps = {
  name: false,
  ingredients: false,
  instructions: false,
};

const RecipeDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;
  padding: 0 0 ${units.rem4} 0;
`;

// const ContentContainer = styled.div`
//   // animation
//   transition: width ${styles.transition.body};

//   // flexbox
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: ${units.rem5};

//   // box model
//   max-width: calc(100vw - 2 * ${units.rem4});
//   padding: ${units.rem4};
// `;
