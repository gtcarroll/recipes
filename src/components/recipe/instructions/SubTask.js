import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";
import { Ingredient } from "../ingredients";
import { LetterBubble } from ".";

export const SubTask = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let ingredientList = [];
  for (let i = 0; i < props.ingredients.length; i++) {
    let ingredient = props.ingredientsRef[props.ingredientIndex + i];
    ingredientList.push(
      <Ingredient
        key={i}
        color={props.gradient[props.ingredientIndex + i]}
        fontFamily={styles.fontFamily.sansSerif}
        {...ingredient}
      />
    );
  }
  return (
    <SubTaskDiv
      style={{
        backgroundColor: props.isOptional ? theme.overlay : "none",
      }}
    >
      <LetterBubble
        letter={props.letter}
        isIndented={layout.name !== "mobile"}
      />
      <Content>
        <PreText>{props.pretext ? props.pretext : props.text}</PreText>
        {ingredientList.length > 0 && (
          <Ingredients>{ingredientList}</Ingredients>
        )}
        {props.pretext && <Text>{props.text}</Text>}
      </Content>
    </SubTaskDiv>
  );
};

SubTask.defaultProps = {
  pretext: "",
  ingredients: [],
  text: "_text_",
  letter: "b",
  isOptional: false,
};

const SubTaskDiv = styled.li`
  // flexbox
  display: flex;
  flex-direction: row;
  border-radius: ${units.rem0};
`;

const Content = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  // box model
  margin-left: 0.6rem;
  padding: 0.6rem 0;
`;

const PreText = styled.div``;

const Ingredients = styled.ul``;

const Text = styled.div`
  // box model
  margin-top: ${units.rem1};
`;
