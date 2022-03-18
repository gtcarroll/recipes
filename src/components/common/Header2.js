import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import { units, styles } from "./styles";

export const Header2 = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Header2Div
      style={{
        color: theme.background,
        backgroundColor: theme.instruction,
        marginTop: props.isOffset ? "-2.4rem" : "0",
      }}
    >
      {props.text}
    </Header2Div>
  );
};

Header2.defaultProps = {
  text: "default text",
  isOffset: false,
};

const Header2Div = styled.h2`
  // animation
  transition: ${styles.transition.body};

  // box model
  margin: auto;
  border-radius: ${styles.borderRadius.bubble};
  width: 100%;
  max-width: ${styles.width.h2};
  height: ${styles.height.bubble};
  padding-top: ${units.px1};
  padding-bottom: ${units.px0};

  // typography
  //font-size: ${styles.fontSize.h2};
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;
