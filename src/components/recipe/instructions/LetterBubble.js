import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../../context";

export const LetterBubble = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let transparentColor = functions.addAlpha(
    theme.instruction,
    styles.transparency.highlight
  );
  return (
    <LetterBubbleDiv
      style={{
        color: theme.instruction,
        backgroundColor: transparentColor,
        marginLeft: props.isIndented ? 0 : "-" + units.rem2,
        fontSize: layout.fontSize.h3,
      }}
    >
      {props.letter}
    </LetterBubbleDiv>
  );
};

LetterBubble.defaultProps = {
  letter: "-",
  isIndented: false,
};

const LetterBubbleDiv = styled.div`
  // animation
  transition: color ${styles.transition.body},
    background-color ${styles.transition.body};

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
  text-align: center;
  user-select: none;
`;
