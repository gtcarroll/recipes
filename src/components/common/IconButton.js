import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LayoutContext } from "./layout-context";
import { ThemeContext } from "./theme-context";
import { units, styles } from "./styles";
import { functions } from "./functions";

export const IconButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <IconButtonDiv
      onClick={() => {
        props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        justifyContent: props.isCentered ? "center" : null,
      }}
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
        {props.icon && <Icon>{props.icon}</Icon>}
        {props.label && <Label>{props.label}</Label>}
      </DisplayDiv>
    </IconButtonDiv>
  );
};

IconButton.defaultProps = {
  isActive: false,
  isCentered: false,
  icon: null,
  label: "",
  color: "rgb(125, 125, 0)",
};

const IconButtonDiv = styled.div`
  // animation
  /* transition: ${styles.transition.button}; */

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
  // animation
  transition: ${styles.transition.button};

  // box model
  padding: 0 ${units.rem1};

  // typography
  white-space: nowrap;
`;

const Icon = styled.div`
  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  width: ${units.rem3};
  height: ${units.rem3};

  svg {
    transition: ${styles.transition.button};
  }
`;
