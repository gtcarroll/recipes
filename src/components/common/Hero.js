import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../context";
import { Header1 } from "./Header1";
import { IconTray } from "./IconTray";

export const Hero = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const image = require(`../../assets/photos/${props.url}.jpg`);
  const heroImg = (
    <HeroImg
      style={{
        backgroundImage: `url(${image})`,
        borderRadius:
          props.isScreenWidth && !props.isHome ? 0 : styles.borderRadius.card,
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
  );
  const containerStyles = {
    textDecoration: "none",
    width:
      props.isScreenWidth && !props.isHome
        ? "100%"
        : "calc(100% + 2 * " + units.rem2 + ")",
    maxWidth:
      layout.name === "desktop"
        ? "calc(50vw - " + units.rem6 + ")"
        : units.pxImg,
    cursor: props.isHome ? null : "default",
  };
  return props.isHome ? (
    <Link to={props.url} style={containerStyles} draggable="false">
      {heroImg}
      <IconTray {...props.tags} isHome={props.isHome} />
    </Link>
  ) : (
    <div style={containerStyles} draggable="false">
      {heroImg}
      <IconTray {...props.tags} isHome={props.isHome} />
    </div>
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
