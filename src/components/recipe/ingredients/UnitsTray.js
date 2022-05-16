import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext, functions, units, styles } from "../../context";
import { IconButton } from "../../common";
import { ReactComponent as Imperial } from "../../../assets/icons/measuring-cup.svg";
import { ReactComponent as Metric } from "../../../assets/icons/gram-weight.svg";

export const UnitsTray = (props) => {
  const unitButtons = [
    { value: "imperial", icon: Imperial },
    { value: "metric", icon: Metric },
  ];
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActive] = useState(0);
  const gradient = functions.getColorGradient(
    unitButtons.length,
    theme.ingredient1,
    theme.ingredient2
  );
  let buttons = unitButtons.map((item, i) => {
    let isActiveUnit = i === activeIndex;
    return (
      <IconButton
        key={i}
        value={item.value}
        color={gradient[i]}
        isActive={isActiveUnit}
        icon={
          <item.icon fill={isActiveUnit ? theme.background : gradient[i]} />
        }
        onClick={() => {
          setActive(i);
          props.setUnits(item.value);
        }}
      />
    );
  });
  return <UnitsTrayDiv>{buttons}</UnitsTrayDiv>;
};

const UnitsTrayDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${units.rem0};

  // box model
  margin-top: ${units.rem0};
  margin-right: -${units.rem0};

  // typography
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
`;
