import React, { useState } from "react";
import styled from "styled-components";
import { Recipe } from "./recipe/";
import { ThemeContext, themes, units } from "./common";
let peanutButterCookies = require("../assets/recipes/peanut-butter-cookies.json");

export const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <AppDiv>
        <Recipe {...peanutButterCookies} />
      </AppDiv>
    </ThemeContext.Provider>
  );
};

const AppDiv = styled.div`
  // box model
  width: 100%;
  height: 100%;

  // typography
  font-size: ${units.fontSize.body};
  font-family: ${units.fontFamily.sansSerif};
`;
