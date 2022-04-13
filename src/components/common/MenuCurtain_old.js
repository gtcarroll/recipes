import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PaletteStrip } from "./PaletteStrip";
import { LayoutContext } from "./layout-context";
import { ThemeContext } from "./theme-context";
import { units, styles } from "./styles";
import { functions } from "./functions";

import heartOn from "./../../assets/photos/heart_on.png";
import heartOff from "./../../assets/photos/heart_off.png";
import { themes } from ".";

export const MenuCurtain = (props) => {
  const [isDropped, setDropped] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(theme.ingredient2, 0.15);
  let transparentColor2 = functions.addAlpha(theme.ingredient2, 0.5);
  return (
    <CurtainDiv
      style={{
        top: isDropped ? "-1rem" : "-34rem",
      }}
    >
      {/* <PaletteStrip /> */}
      <RibbonButton
        onClick={() => {
          setDropped(!isDropped);
        }}
        style={{
          backgroundColor: transparentColor2, //theme.photoOverlay,
          borderColor: theme.ingredient2,
          color: theme.ingredient2,
          fontSize: layout.fontSize.body,
          borderLeft: "none",
          opacity: 0,
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span>M</span>
        <span>E</span>
        <span>N</span>
        <span>U</span>
        <span></span>
        <span></span>
        <span></span>
        <Heart>
          <img
            draggable="false"
            alt="heart button"
            src={isDropped ? heartOn : heartOff}
          />
        </Heart>
      </RibbonButton>
      <RibbonButton
        onClick={() => {
          setDropped(!isDropped);
        }}
        style={{
          backgroundColor: transparentColor, //theme.photoOverlay,
          borderColor: theme.ingredient2,
          color: theme.ingredient2,
          fontSize: layout.fontSize.body,
          //borderRadius: "0 0 " + units.rem4 + " " + units.rem4,
        }}
      >
        <span></span>
        <span>M</span>
        <span>E</span>
        <span>N</span>
        <span>U</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Heart>
          <img
            draggable="false"
            alt="heart button"
            src={isDropped ? heartOff : heartOff}
          />
        </Heart>
      </RibbonButton>
    </CurtainDiv>
  );
};

const CurtainDiv = styled.div`
  // animation
  transition: ${styles.transition.body};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: -36rem;
  z-index: 1000;
  width: 100%;
`;

const RibbonButton = styled.button`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;

  font-weight: bold;

  border-top: 0px;
  border-radius: ${styles.borderRadius.button}; //0 0 ${units.rem3} 0;
  box-shadow: ${styles.boxShadow.card};
  border: 2px solid pink;

  position: relative;
  z-index: 1003;
  width: ${units.rem5};
  height: 36.8rem;
  right: 0.6rem;
  span {
    width: 100%;
    height: ${units.rem5};
  }
  &:hover {
    background-color: black;
  }
`;

const Heart = styled.div`
  height: ${units.rem4};
  display: flex;
  justify-content: center;
  img {
    height: ${units.rem3};
  }
`;
