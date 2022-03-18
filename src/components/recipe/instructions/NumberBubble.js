import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, units, styles } from "../../common";

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
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin-left: 0; //-${units.rem2};
  border-radius: ${styles.borderRadius.bubble};
  width: ${units.rem4};
  min-width: ${units.rem4};
  height: ${units.rem4};

  // typography
  font-size: ${styles.fontSize.h2};
  text-align: center;
  font-weight: bold;
`;
