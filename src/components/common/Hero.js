import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../context";
import { Header1 } from "./Header1";
import { IconTray } from "./IconTray";
import { Note } from "./Note";

export const Hero = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  return (
    <HeroDiv
      style={{
        width: props.isScreenWidth
          ? "100%"
          : "calc(100% + 2 * " + units.rem2 + ")",
        maxWidth: units.pxImg,
      }}
    >
      <HeroImg
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          borderRadius: props.isScreenWidth ? 0 : styles.borderRadius.card,
          boxShadow: props.isScreenWidth ? null : styles.boxShadow.card,
          height: layout.height.hero,
          maxWidth: units.pxImg,
        }}
      >
        <OverlayBar
          style={{
            backgroundColor: theme.photoOverlay,
          }}
        >
          <Header1 text={props.text} color={theme.photoForeground} />
        </OverlayBar>
      </HeroImg>
      <IconTray {...props.tags} />
    </HeroDiv>
  );
};

Hero.defaultProps = {
  text: "default text",
  backgroundImage: "",
  isScreenWidth: false,
  tags: {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
  },
};

const HeroDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroImg = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // box model
  width: 100%;
  max-width: ${units.pxImg};

  // background image
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const OverlayBar = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  width: 100%;
  padding: ${units.rem1} 0;
`;
