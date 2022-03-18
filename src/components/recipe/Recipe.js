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
      <Header1 text={props.name} />
      <ContentDiv>
        <ArticleContainer>
          {/* <ThemeButton /> */}
          {/* <Header1 text={props.name} /> */}
          <IngredientList
            ingredients={ingredients}
            setIngredients={setIngredients}
            originalIngredients={props.ingredients}
            gradient={gradient}
          />
          {props.isMobile && (
            <InstructionList
              ingredients={ingredients}
              instructions={props.instructions}
              gradient={gradient}
            />
          )}
          <RowDiv>
            {/* <Footer /> */}
            <ThemeButton />
            {/* <Footer /> */}
          </RowDiv>
        </ArticleContainer>
        {!props.isMobile && (
          <ArticleContainer style={{ width: styles.width.contentDesktop }}>
            <InstructionList
              ingredients={ingredients}
              instructions={props.instructions}
              gradient={gradient}
            />
          </ArticleContainer>
        )}
      </ContentDiv>
    </RecipeDiv>
  );
};

Recipe.defaultProps = {
  isMobile: true,
  name: false,
  ingredients: false,
  instructions: false,
};

const RecipeDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  //justify-content: center;

  // box model
  margin: 0 auto;
  width: 100%; //${styles.width.content};
  padding: ${units.rem2} 0;
`;

const ContentDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  margin: 0 auto;
  width: 100%; //${styles.width.content};
  max-width: 100vw;
  //height: 100vh;
`;

const ArticleContainer = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${units.rem5};

  // box model
  width: ${styles.width.content};
  //height: fit-content;
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
