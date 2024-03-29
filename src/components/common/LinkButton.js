import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../context";

export const LinkButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <Link
      to={props.to}
      tabIndex={props.tabIndex}
      onClick={() => {
        if (!props.isActive || props.isToggle) props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        justifyContent: props.isCentered ? "center" : null,
        textDecoration: "none",
      }}
      title={props.title}
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
    </Link>
  );
};

LinkButton.defaultProps = {
  to: "/",
  isToggle: false,
  isActive: false,
  isCentered: false,
  icon: null,
  label: "",
  title: null,
  color: "rgb(125, 125, 0)",
};

const DisplayDiv = styled.div`
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
