import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, themes } from "./theme-context";
import { units, styles } from "./styles";

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    console.log("theme toggled");
    let isDark = theme === themes.dark;
    isDark ? setTheme(themes.light) : setTheme(themes.dark);
    document.documentElement.style.setProperty(
      "--root-background-color",
      isDark ? themes.light.background : themes.dark.background
    );
    document.documentElement.style.setProperty(
      "--root-scrollbar-color",
      isDark
        ? themes.light.scrollbar + " " + themes.light.background
        : themes.dark.scrollbar + " " + themes.dark.background
    );
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
