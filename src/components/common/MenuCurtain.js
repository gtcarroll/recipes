import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ThemeContext,
  themes,
  LayoutContext,
  functions,
  units,
  styles,
} from "../context";
import { LinkButton } from "./LinkButton";
import { IconButton } from "./IconButton";
import { RibbonButton } from "./RibbonButton";
import { ReactComponent as GlutenFree } from "../../assets/icons/gluten-free.svg";
import { ReactComponent as Vegetarian } from "../../assets/icons/vegetarian.svg";
import { ReactComponent as Vegan } from "../../assets/icons/vegan-plus.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";

export const MenuCurtain = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);
  const [themesIndex, setThemesIndex] = useState(theme.isDark ? 0 : 1);
  const menuHeight = "20rem"; // +/-3rem
  const recipesData = [
    { label: "vegetarian", value: "vegetarian", icon: Vegetarian },
    { label: "vegan", value: "vegan", icon: Vegan },
    { label: "gluten-free", value: "glutenFree", icon: GlutenFree },
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
    let isActiveButton = props.search?.get(item.value);
    return props.isHome ? (
      <IconButton
        tabIndex={isActive ? 2 : -1}
        key={i}
        color={recipesGradient[i]}
        label={item.label}
        icon={
          <item.icon
            fill={isActiveButton ? theme.background : recipesGradient[i]}
          />
        }
        isActive={isActiveButton}
        isToggle
        onClick={() => {
          if (props.search.get(item.value)) props.search.delete(item.value);
          else props.search.set(item.value, true);
          props.setSearch(props.search);
        }}
      />
    ) : (
      <LinkButton
        to={"/?" + item.value + "=true"}
        tabIndex={isActive ? 2 : -1}
        key={i}
        color={recipesGradient[i]}
        label={item.label}
        icon={
          <item.icon
            fill={recipesGradient[i]} //{isActiveRecipe ? theme.background : recipesGradient[i]}
          />
        }
        // isActive={isActiveRecipe}
        onClick={() => {
          setActive(false);
        }}
      />
    );
  });
  let themeButtons = themesData.map((item, i) => {
    let isActiveTheme = i === themesIndex;
    return (
      <IconButton
        tabIndex={isActive ? 2 : -1}
        key={i}
        title={item.label}
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
      tabIndex={-1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setActive(false);
        }
      }}
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
          <Link to="/?vegetarian=true" />
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
          tabIndex={1}
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

MenuCurtain.defaultProps = { isHome: false };

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
  // animation
  transition: ${styles.transition.body};

  // box model
  border-bottom: 3px solid;
  padding: ${units.rem1} ${units.rem2} ${units.rem0} ${units.rem1};
  padding-bottom: ${units.rem0};
  margin: ${units.rem0} 0;

  // typography
  white-space: nowrap;
  font-family: ${styles.fontFamily.sansSerif};
  font-weight: bold;
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
