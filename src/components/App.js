import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    checkResize();
    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);
  const checkResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <AppDiv
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <Recipe {...peanutButterCookies} isMobile={isMobile} />
      </AppDiv>
    </ThemeContext.Provider>
  );
};

const AppDiv = styled.div`
  // animation
  transition: background-color ${styles.transition.body},
    color ${styles.transition.body};

  // box model
  height: 100vh;
  max-width: 100vw;
  //height: 100%;

  // clipping
  overflow-x: hidden;
  overflow-y: auto;

  // typography
  font-size: ${styles.fontSize.body};
  font-family: ${styles.fontFamily.sansSerif};
`;