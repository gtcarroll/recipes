import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import { LayoutContext } from "./layout-context";
import { units, styles } from "./styles";

export const Header2 = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  return (
    <Header2Div
      style={{
        color: theme.background,
        backgroundColor: theme.instruction,
        marginTop: props.isOffset ? "-" + units.rem4 : "0",
        fontSize: layout.fontSize.h2,
        maxWidth: layout.width.header,
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
  transition: ${styles.transition.bodyALL};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin: auto;
  border-radius: ${styles.borderRadius.header};
  width: 100%;
  max-width: ${styles.width.h2};
  padding-bottom: ${units.px0};

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;