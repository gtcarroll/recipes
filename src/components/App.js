import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Recipe } from "./recipe/";
import {
  PaletteStrip,
  ThemeContext,
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
          <PaletteStrip />
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
  /* height: -webkit-fill-available;
  height: 100vh; */
  height: auto;
  max-width: 100vw;
  /* padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left); // handles iphone notch issues */

  // clipping
  /* overflow-x: hidden;
  overflow-y: auto; */

  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;
