import React, { useState } from "react";
import styled from "styled-components";
import { Recipe } from "./recipe/";
import { ThemeContext, themes, styles } from "./common";
let peanutButterCookies = require("../assets/recipes/peanut-butter-cookies.json");

export const App = () => {
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  document.documentElement.style.setProperty("color-scheme", preferredTheme);
  const [theme, setTheme] = useState(themes[preferredTheme]);
  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <AppDiv
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <Recipe {...peanutButterCookies} />
      </AppDiv>
    </ThemeContext.Provider>
  );
};

const AppDiv = styled.div`
  // animation
  transition: background-color ${styles.transition.body},
    color ${styles.transition.body};

  // box model
  width: 100%;
  height: 100%;

  // clipping
  overflow-x: none;
  overflow-y: scroll;

  // typography
  font-size: ${styles.fontSize.body};
  font-family: ${styles.fontFamily.sansSerif};
`;
