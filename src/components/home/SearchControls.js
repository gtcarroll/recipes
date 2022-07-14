import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  LayoutContext,
  ThemeContext,
  functions,
  styles,
  units,
} from "../context";
import { IconButton } from "../common";
import { ReactComponent as Vegetarian } from "../../assets/icons/vegetarian.svg";
import { ReactComponent as Vegan } from "../../assets/icons/vegan-plus.svg";
import { ReactComponent as GlutenFree } from "../../assets/icons/gluten-free.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

export const SearchControls = (props) => {
  let name = props.search.get("name");
  const [state, setState] = useState({
    isHovered: false,
    searchText: name ? name : "",
  });
  const setIsHovered = (val) => {
    setState({
      isHovered: val,
      searchText: name ? name : "",
    });
  };
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const unitButtons = [
    { value: "vegetarian", icon: Vegetarian },
    { value: "vegan", icon: Vegan },
    { value: "glutenFree", icon: GlutenFree },
  ];
  const gradient = functions.getColorGradient(
    unitButtons.length,
    theme.ingredient1,
    theme.ingredient2
  );
  let transparentColor = functions.addAlpha(theme.instruction, 0.3);
  let buttons = unitButtons.map((item, i) => {
    let isActive = props.search.get([item.value]);
    return (
      <IconButton
        key={i}
        value={item.value}
        title={item.value}
        color={gradient[i]}
        isActive={isActive}
        isToggle
        icon={<item.icon fill={isActive ? theme.background : gradient[i]} />}
        onClick={() => {
          if (props.search.get(item.value)) props.search.delete(item.value);
          else props.search.set(item.value, true);
          props.setSearch(props.search);
        }}
      />
    );
  });

  return (
    <SearchContainer
      style={{
        backgroundColor: theme.overlay,
      }}
    >
      <SearchInputDiv
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={(event) => {
          event.target.select();
          setIsHovered(true);
        }}
        onBlur={() => setIsHovered(false)}
      >
        <SearchInputDisplayDiv
          style={{
            backgroundColor: state.isHovered ? transparentColor : null,
          }}
        >
          <Icon
            style={{
              backgroundColor: null,
            }}
          >
            <Search fill={theme.instruction} />
          </Icon>
          <SearchInput
            style={{
              color: theme.foreground,
              fontSize: layout.fontSize.body,
            }}
            type="text"
            name="search"
            placeholder="search"
            value={name ? name : ""} //state.searchText}
            onKeyDown={props.updateOnEnter}
            onBlur={props.updateSearch}
            onChange={(event) => {
              props.search.set("name", event.target.value);
              setState({
                isHovered: state.isHovered,
                searchText: event.target.value,
              });
            }}
          />
        </SearchInputDisplayDiv>
      </SearchInputDiv>
      {buttons}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  box-shadow: ${styles.boxShadow.card};
  border-radius: ${styles.borderRadius.card};
`;

const SearchInputDiv = styled.label`
  // animation
  transition: ${styles.transition.button};
  cursor: pointer;

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  border-radius: ${styles.borderRadius.button};

  :focus-within {
    /* background-color: red;  */
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SearchInputDisplayDiv = styled.div`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  margin: ${units.rem0};
  border-radius: ${styles.borderRadius.button};
`;

const SearchInput = styled.input`
  // animation
  transition: ${styles.transition.button};

  // box model
  padding: ${units.rem0};
  border-radius: ${styles.borderRadius.button};

  // typography
  font-family: ${styles.fontFamily.sansSerif};

  :focus {
    outline: none;
  }
`;
const Icon = styled.div`
  // animation
  transition: ${styles.transition.button};
  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  width: ${units.rem3};
  height: ${units.rem3};
  padding: ${units.rem0};
  border-radius: ${styles.borderRadius.button};

  svg {
    transition: ${styles.transition.button};
  }
`;
