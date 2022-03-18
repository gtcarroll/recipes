import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  Header1,
  Footer,
  ThemeButton,
  ThemeContext,
  functions,
  units,
  styles,
} from "../common";
import { IngredientList, InstructionList } from ".";

export const Recipe = (props) => {
  const [ingredients, setIngredients] = useState(props.ingredients);
  const { theme } = useContext(ThemeContext);
  const gradient = functions.getColorGradient(
    props.ingredients.length,
    theme.ingredient1,
    theme.ingredient2
  );
  return (
    <RecipeDiv>
      <ArticleContainer>
        <ThemeButton />
        <Header1 text={props.name} />
        <IngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
          originalIngredients={props.ingredients}
          gradient={gradient}
        />
        <InstructionList
          ingredients={ingredients}
          instructions={props.instructions}
          gradient={gradient}
        />
        <RowDiv>
          {/* <Footer /> */}
          <ThemeButton />
          {/* <Footer /> */}
        </RowDiv>
      </ArticleContainer>
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
  height: 100vh;
`;

const ArticleContainer = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${units.rem5};

  // box model
  margin: 0 auto;
  padding: ${units.rem2} ${units.rem4};
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${units.rem3};

  // box model
  width: 0;
`;
