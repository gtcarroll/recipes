import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Recipe } from "./recipe/";
import {
  MenuCurtain,
  ThemeContext,
  PaletteStrip,
  themes,
  LayoutContext,
  layouts,
  styles,
} from "./common";
let peanutButterCookies = require("../assets/recipes/peanut-butter-cookies.json");

export const App = () => {
  const getLayout = (width) => {
    return width > layouts.desktop.minWidth
      ? layouts.desktop
      : width > layouts.laptop.minWidth
      ? layouts.laptop
      : width > layouts.tablet.minWidth
      ? layouts.tablet
      : layouts.mobile;
  };

  // set theme metadata
  useEffect(() => {
    let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.style.setProperty(
      "--root-background-color",
      isDark ? themes.dark.background : themes.light.background
    );
    document.documentElement.style.setProperty(
      "--root-scrollbar-color",
      isDark
        ? themes.dark.scrollbar + " " + themes.dark.background
        : themes.light.scrollbar + " " + themes.light.background
    );
  }, []);

  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  document.documentElement.style.setProperty("color-scheme", preferredTheme);
  const [theme, setTheme] = useState(themes[preferredTheme]);
  const [layout, setLayout] = useState(getLayout(window.innerWidth));

  useEffect(() => {
    const checkResize = () => {
      setLayout(getLayout(window.innerWidth));
    };
    checkResize();
    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <LayoutContext.Provider
        value={{
          layout,
          setLayout,
        }}
      >
        <AppDiv
          style={{
            color: theme.foreground,
            backgroundColor: theme.background,
            fontSize: layout.fontSize.body,
          }}
        >
          <MenuCurtain dropToggle={false} />
          <Recipe {...peanutButterCookies} />
        </AppDiv>
      </LayoutContext.Provider>
    </ThemeContext.Provider>
  );
};

const AppDiv = styled.main`
  // animation
  transition: background-color ${styles.transition.body},
    color ${styles.transition.body};

  // box model
  height: auto;
  max-width: 100vw;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;
