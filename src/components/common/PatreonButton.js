import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LayoutContext } from "./layout-context";
import { ThemeContext } from "./theme-context";
import { units, styles } from "./styles";
import { ReactComponent as PatreonLogo } from "../../assets/photos/patreon-logo.svg";
import { ReactComponent as PatreonWordmark } from "../../assets/photos/patreon-wordmark.svg";

export const PatreonButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let patreonFG = theme.isDark ? "#FFFFFF" : "#141518";
  let patreonBG = theme.isDark ? "#141518" : "#FFFFFF";
  return (
    <PatreonButtonDiv
      onClick={() => {
        props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? patreonFG : "transparent" }} //patreonBG }}
    >
      <PatreonLogo
        fill={isHovered ? patreonBG : patreonFG}
        style={{
          minHeight: units.rem3,
          minWidth: units.rem3,
        }}
      />
      <PatreonWordmark fill={isHovered ? patreonBG : patreonFG} />
    </PatreonButtonDiv>
  );
};

PatreonButton.defaultProps = {
  isActive: false,
  icon: null,
  label: "",
  color: "rgb(125, 125, 0)",
};

const PatreonButtonDiv = styled.button`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // box model
  border-radius: 2px; //${styles.borderRadius.button};
  /* width: 14rem; */
  height: ${units.rem4};
  padding: ${units.rem0};
  margin: ${units.rem2};
  svg {
    height: ${units.rem3};
  }
`;

const Label = styled.div`
  // box model
  padding: 0 ${units.rem1};

  // typography
  white-space: nowrap;
`;
