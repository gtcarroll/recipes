import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, themes } from "./theme-context";
import { units, styles } from "./styles";

export const ThemeButton = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    console.log("theme toggled");
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <ThemeButtonDiv
      onClick={handleClick}
      style={{
        color: theme.foreground,
        backgroundColor: theme.overlay,
      }}
    >
      theme
    </ThemeButtonDiv>
  );
};

const ThemeButtonDiv = styled.button`
  // animation
  transition: ${styles.transition.button};

  // box model
  margin: 0 auto;
  box-shadow: ${styles.boxShadow.card};
  border: none;
  border-radius: ${styles.borderRadius.button};
  height: ${units.rem4};
  padding: 0 ${units.rem2};

  // typography
  font-size: ${units.rem2};
  font-weight: bold;

  // pseudo-classes
  :hover {
    box-shadow: ${styles.boxShadow.hover};
  }
`;