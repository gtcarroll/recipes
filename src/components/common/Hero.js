import React, { useContext } from "react";
import styled from "styled-components";
import { Header1 } from "./Header1";
import { ThemeContext } from "./theme-context";
import { LayoutContext } from "./layout-context";
import { units, styles } from "./styles";

export const Hero = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  return (
    <HeroDiv
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        borderRadius: props.isScreenWidth ? 0 : styles.borderRadius.card,
        boxShadow: props.isScreenWidth ? null : styles.boxShadow.card,
        height: layout.height.hero,
        width: props.isScreenWidth
          ? "100%"
          : "calc(100% + 2 * " + units.rem2 + ")",
      }}
    >
      <OverlayBar
        style={{
          backgroundColor: theme.photoOverlay,
        }}
      >
        <Header1 text={props.text} color={theme.photoForeground} />
      </OverlayBar>
    </HeroDiv>
  );
};

Hero.defaultProps = {
  text: "default text",
  backgroundImage: "",
  isScreenWidth: false,
};

const OverlayBar = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  width: 100%;
  padding: ${units.rem1} 0;
`;

const HeroDiv = styled.div`
  // flexbox
  display: flex;
  justify-content: center;
  align-items: center;

  // background image
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
