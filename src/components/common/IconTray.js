import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../context";
import { IconLabel } from "./IconLabel";
import { ReactComponent as GlutenFree } from "../../assets/icons/gluten-free.svg";
import { ReactComponent as Vegetarian } from "../../assets/icons/vegetarian.svg";
import { ReactComponent as Vegan } from "../../assets/icons/vegan-plus.svg";

export const IconTray = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const labelsData = [
    { label: "vegetarian", value: "vegetarian", icon: Vegetarian },
    { label: "vegan", value: "vegan", icon: Vegan },
    { label: "gluten-free", value: "glutenFree", icon: GlutenFree },
  ];
  const gradient = functions.getColorGradient(
    labelsData.length,
    theme.ingredient1,
    theme.ingredient2
  );
  const labels = labelsData.map((item, i) => {
    if (props[item.value] || layout.name === "mobile") {
      return (
        <IconLabel
          key={i}
          color={gradient[i]}
          title={layout.name === "mobile" ? item.label : null}
          label={
            props[item.value] && layout.name !== "mobile" ? item.label : null
          }
          icon={
            <item.icon
              fill={
                props[item.value]
                  ? gradient[i]
                  : functions.addAlpha(gradient[i], 0.3)
              }
            />
          }
        />
      );
    } else return null;
  });
  return (
    <IconTrayUnderlay style={{ backgroundColor: theme.background }}>
      <IconTrayDiv style={{ backgroundColor: theme.overlay }}>
        {labels}
      </IconTrayDiv>
    </IconTrayUnderlay>
  );
};

IconTray.defaultProps = {
  vegetarian: true,
  vegan: true,
  glutenFree: true,
};

const IconTrayUnderlay = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  padding: 0;
  margin: 0 auto;
  margin-top: calc(-${units.rem5} / 2);
  border-radius: ${styles.borderRadius.button};
  width: min-content;
  min-height: calc(${units.rem5} / 2);

  box-shadow: ${styles.boxShadow.card};
`;

const IconTrayDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  // box model
  border-radius: ${styles.borderRadius.button};
  width: min-content;
`;
