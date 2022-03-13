import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, units } from "../../common";

export const NumberBubble = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <NumberBubbleDiv
      style={{
        color: theme.background,
        backgroundColor: theme.instruction,
      }}
    >
      {props.number}
    </NumberBubbleDiv>
  );
};

NumberBubble.defaultProps = {
  number: "-",
};

const NumberBubbleDiv = styled.div`
  // box model
  margin-left: 0; //-${units.rem2};
  border-radius: ${units.rem0};
  width: ${units.rem4};
  min-width: ${units.rem4};
  height: ${units.height.bubble};
  padding-top: ${units.rem0};

  // typography
  font-size: ${units.fontSize.h2};
  text-align: center;
  font-weight: bold;
`;
