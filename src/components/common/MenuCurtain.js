import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  themes,
  LayoutContext,
  functions,
  units,
  styles,
} from "../context";
import { IconButton } from "./IconButton";
import { RibbonButton } from "./RibbonButton";
import { ReactComponent as Sweet } from "../../assets/icons/gluten-free.svg";
import { ReactComponent as Savory } from "../../assets/icons/vegetarian.svg";
import { ReactComponent as Vegan } from "../../assets/icons/vegan-plus.svg";
import { ReactComponent as D20 } from "../../assets/icons/d20.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";

export const MenuCurtain = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);
  const [recipesIndex, setRecipesIndex] = useState(-1);
  const [themesIndex, setThemesIndex] = useState(0);
  const menuHeight = "23rem";
  const recipesData = [
    { label: "vegetarian", icon: Savory },
    { label: "vegan", icon: Vegan },
    { label: "gluten-free", icon: Sweet },
    { label: "random", icon: D20 },
  ];
  const themesData = [
    { label: "dark", icon: Moon },
    { label: "light", icon: Sun },
  ];
  let recipesGradient = functions.getColorGradient(
    recipesData.length,
    theme.ingredient1,
    theme.ingredient2
  );
  let themesGradient = functions.getColorGradient(
    themesData.length,
    theme.ingredient1,
    theme.ingredient2
  );
  const themeClick = (newTheme) => {
    // update color variables
    document.documentElement.style.setProperty(
      "--root-background-color",
      newTheme.background
    );
    document.documentElement.style.setProperty(
      "--root-scrollbar-color",
      newTheme.scrollbar + " " + newTheme.background
    );

    // update meta tags
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", newTheme.background);

    // update state
    setTheme(newTheme);
  };
  let transparent0 = functions.addAlpha(theme.instruction, 0.3);
  let recipeButtons = recipesData.map((item, i) => {
    let isActiveRecipe = i === recipesIndex;
    return (
      <IconButton
        key={i}
        color={recipesGradient[i]}
        label={item.label}
        icon={
          <item.icon
            fill={isActiveRecipe ? theme.background : recipesGradient[i]}
          />
        }
        isActive={isActiveRecipe}
        onClick={() => {
          setRecipesIndex(i);
        }}
      />
    );
  });
  let themeButtons = themesData.map((item, i) => {
    let isActiveTheme = i === themesIndex;
    return (
      <IconButton
        key={i}
        color={themesGradient[i]}
        icon={
          <item.icon
            fill={isActiveTheme ? theme.background : themesGradient[i]}
          />
        }
        isCentered
        isActive={isActiveTheme}
        onClick={() => {
          setThemesIndex(i);
          themeClick(themes[item.label]);
        }}
      />
    );
  });

  return (
    <MenuUnderlay
      style={{
        backgroundColor: theme.background,
        boxShadow: isActive ? styles.boxShadow.card : null,
        top: isActive ? 0 : "calc(-" + menuHeight + " - " + units.rem2 + ")",
        right: layout.width.menuSpacer,
        borderBottomRightRadius: layout.name === "mobile" ? 0 : null,
      }}
    >
      <MenuOverlay
        style={{
          color: theme.instruction,
          backgroundColor: theme.overlay,
          height: menuHeight,
          borderBottomRightRadius: layout.name === "mobile" ? 0 : null,
        }}
      >
        <ColumnDiv
          style={{
            width: layout.width.menu,
            paddingTop: units.rem0,
          }}
        >
          <MenuHeader
            style={{
              borderColor: transparent0,
            }}
          >
            Recipes
          </MenuHeader>
          {recipeButtons}
          <MenuHeader
            style={{
              borderColor: transparent0,
            }}
          >
            Themes
          </MenuHeader>
          <RowDiv>{themeButtons}</RowDiv>
        </ColumnDiv>
        <RibbonButton
          menuHeight={menuHeight}
          isActive={isActive}
          onClick={() => {
            setActive(!isActive);
          }}
        />
      </MenuOverlay>
    </MenuUnderlay>
  );
};

const MenuUnderlay = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  // positioning
  z-index: 999;
  position: fixed;
`;

const MenuOverlay = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // box model
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: ${units.rem2};
  padding-top: 0;
`;

const MenuHeader = styled.div`
  // box model
  border-bottom: 3px solid;
  padding: ${units.rem1} ${units.rem2} ${units.rem0} ${units.rem1};
  padding-bottom: ${units.rem0};
  margin: ${units.rem0} 0;

  // typography
  white-space: nowrap;
  font-family: ${styles.fontFamily.sansSerif};
  font-weight: bold;
  /* margin-left: -${units.rem2}; */
  /* padding-left: ${units.rem1}; */
  /* margin-right: calc(-${units.rem5} - ${units.rem1} - 4px); */
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: calc(100% - ${units.rem6} - ${units.rem1});

  // box model
  margin-top: ${units.rem1};
  width: calc(100% - ${units.rem4});
  padding: 0 ${units.rem1};
`;
