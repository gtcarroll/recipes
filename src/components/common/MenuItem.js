import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LayoutContext } from "./layout-context";
import { ThemeContext } from "./theme-context";
import { units, styles } from "./styles";
import { functions } from "./functions";

export const MenuItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <MenuItemDiv
      onClick={() => {
        props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <DisplayDiv
        style={{
          fontSize: layout.fontSize.body,
          color: props.isActive ? theme.background : theme.foreground,
          backgroundColor: props.isActive
            ? props.color
            : isHovered
            ? transparentColor
            : "transparent",
        }}
      >
        {props.icon && <IconDiv>{props.icon}</IconDiv>}
        <Label>{props.label}</Label>
      </DisplayDiv>
    </MenuItemDiv>
  );
};

MenuItem.defaultProps = {
  isActive: false,
  icon: null,
  label: "",
  color: "rgb(125, 125, 0)",
};

const MenuItemDiv = styled.div`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  border-radius: ${styles.borderRadius.button};
  width: 100%;
`;

const DisplayDiv = styled.button`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  border-radius: ${styles.borderRadius.button};
  padding: ${units.rem0};
  margin: ${units.rem0};
  width: min-content;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;

const Label = styled.div`
  // box model
  padding: 0 ${units.rem1};

  // typography
  white-space: nowrap;
`;

const IconDiv = styled.div`
  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  width: ${units.rem3};
  height: ${units.rem3};
`;
