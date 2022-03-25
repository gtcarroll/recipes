import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../common";

export const NumberBubble = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  return (
    <NumberBubbleDiv
      style={{
        color: theme.background,
        backgroundColor: theme.instruction,
        fontSize: layout.fontSize.h2,
      }}
    >
      {props.number ? props.number : "★"}
    </NumberBubbleDiv>
  );
};

NumberBubble.defaultProps = {
  number: "-",
};

const NumberBubbleDiv = styled.div`
  // animation
  transition: color ${styles.transition.body},
    background-color ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  border-radius: ${styles.borderRadius.bubble};
  width: ${units.rem4};
  min-width: ${units.rem4};
  height: ${units.rem4};

  // typography
  text-align: center;
  font-weight: bold;
  user-select: none;
`;
