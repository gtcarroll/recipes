import React, { useContext } from "react";
import styled from "styled-components";
import { Header1 } from "./Header1";
import { LayoutContext } from "./layout-context";
import { units, styles } from "./styles";

export const Hero = (props) => {
  const { layout } = useContext(LayoutContext);
  return (
    <HeroDiv
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.backgroundImage})`,
        height: layout.height.hero,
        borderRadius: props.isScreenWidth ? 0 : styles.borderRadius.card,
        boxShadow: props.isScreenWidth ? null : styles.boxShadow.card,
        padding: props.isScreenWidth ? 0 : units.rem2,
      }}
    >
      <Header1 text={props.text} color="#fff" />
    </HeroDiv>
  );
};

Hero.defaultProps = {
  text: "default text",
  backgroundImage: "",
  isScreenWidth: false,
};

const HeroDiv = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  justify-content: center;
  align-items: center;

  // box model
  width: 100%;

  // background image
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
