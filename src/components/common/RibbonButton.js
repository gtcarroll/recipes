import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../context";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

export const RibbonButton = (props) => {
  const [isVisible, setVisible] = useState(true);
  const [isHovered, setHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const targetScrollHi = useRef(0);
  const targetScrollLo = useRef(0);
  const prevScroll = useRef(0);
  let restColor = functions.addAlpha(theme.ingredient2, 0.15);
  let hoverColor = functions.addAlpha(theme.ingredient2, 0.3);

  useEffect(() => {
    const checkScroll = () => {
      let currScroll = window.scrollY;
      if (currScroll < targetScrollLo.current || currScroll <= 0) {
        setVisible(true);
      } else if (currScroll > targetScrollHi.current) {
        setVisible(false);
      }
      if (currScroll > prevScroll.current) {
        // if scrolling down, reset lower target value
        targetScrollLo.current = currScroll - 100;
      } else {
        // if scrolling down, reset higher target value
        targetScrollHi.current = currScroll + 50;
      }
      prevScroll.current = currScroll;
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <RibbonButtonDiv
      style={{
        backgroundColor: theme.background,
        top: props.isActive || isHovered || isVisible ? "0" : "-" + units.rem6,
      }}
      onClick={() => {
        props.onClick();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <InnerDiv
        style={{
          borderColor: props.isActive ? theme.ingredient2 : "transparent",
          backgroundColor: isHovered ? hoverColor : restColor,
          fontSize: layout.fontSize.body,
        }}
      >
        <MenuIcon
          fill={theme.ingredient2}
          style={{
            width: units.rem3,
            height: units.rem3,
            paddingBottom: units.rem1,
          }}
        />
      </InnerDiv>
    </RibbonButtonDiv>
  );
};

RibbonButton.defaultProps = {
  isActive: false,
  menuHeight: 0,
};

const RibbonButtonDiv = styled.button`
  // animation
  transition: ${styles.transition.button};

  // box model
  box-shadow: ${styles.boxShadow.card};
  /* border-bottom: 2px solid transparent; */
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-sizing: border-box;

  position: relative;
  top: 0;
  /* right: ${units.rem2}; */
  margin-bottom: calc(-${units.rem6} - ${units.rem1});
`;

const InnerDiv = styled.div`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  // box model
  height: 100%;
  border: 2px solid transparent;
  border-top: none;
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0 ${units.rem1};
  box-sizing: border-box;
`;
