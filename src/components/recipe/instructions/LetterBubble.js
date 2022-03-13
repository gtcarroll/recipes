import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, functions, units } from "../../common";

export const LetterBubble = (props) => {
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(
    theme.instruction,
    units.transparency.highlight
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
  // box model
  margin-left: -${units.rem2};
  //margin-right: ${units.rem0};
  border-radius: ${units.rem0};
  width: ${units.rem4};
  min-width: ${units.rem4};
  height: ${units.rem4};
  padding-top: ${units.px2};

  box-sizing: border-box;

  // typography
  font-size: ${units.fontSize.h3};
  text-align: center;
`;
