import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, functions, units, styles } from "../../common";

export const LetterBubble = (props) => {
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(
    theme.instruction,
    styles.transparency.highlight
  );
  return (
    <LetterBubbleDiv
      style={{
        color: theme.instruction,
        backgroundColor: transparentColor,
      }}
    >
      {props.letter}
    </LetterBubbleDiv>
  );
};

LetterBubble.defaultProps = {
  letter: "-",
};

const LetterBubbleDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin-left: -${units.rem2};
  border-radius: ${styles.borderRadius.bubble};
  width: ${units.rem4};
  min-width: ${units.rem4};
  height: ${units.rem4};

  // typography
  font-size: ${styles.fontSize.h3};
  text-align: center;
`;
