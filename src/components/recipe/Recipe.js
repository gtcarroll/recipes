import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  Hero,
  ThemeButton,
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../common";
import { IngredientList, InstructionList } from ".";
import frogicon from "../../assets/photos/pb-cookies.png";

export const Recipe = (props) => {
  const [ingredients, setIngredients] = useState(props.ingredients);
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const gradient = functions.getColorGradient(
    props.ingredients.length,
    theme.ingredient1,
    theme.ingredient2
  );
  return (
    <RecipeDiv>
      {layout.name === "mobile" && (
        <Hero backgroundImage={frogicon} text={props.name} isScreenWidth />
      )}
      <ContentDiv>
        <ArticleContainer style={{ width: layout.width.ingredients }}>
          {layout.name !== "mobile" && (
            <Hero backgroundImage={frogicon} text={props.name} />
          )}
          <IngredientList
            ingredients={ingredients}
            setIngredients={setIngredients}
            originalIngredients={props.ingredients}
            gradient={gradient}
          />
          {layout.name !== "desktop" && (
            <InstructionList
              ingredients={ingredients}
              instructions={props.instructions}
              gradient={gradient}
            />
          )}
        </ArticleContainer>
        {layout.name === "desktop" && (
          <ArticleContainer style={{ width: layout.width.instructions }}>
            <InstructionList
              ingredients={ingredients}
              instructions={props.instructions}
              gradient={gradient}
            />
          </ArticleContainer>
        )}
      </ContentDiv>
      <ThemeButton />
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
  padding: 0 0 ${units.rem4} 0;
`;

const ContentDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;
`;

const ArticleContainer = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${units.rem5};

  // box model
  width: ${styles.width.content};
  padding: ${units.rem4};
`;
