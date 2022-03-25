import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MultiplierButton } from "./MultiplierButton.js";
import { ThemeContext, functions, units, styles } from "../../common";

export const MultiplierButtonTray = (props) => {
  let buttonValues = ["1/2", "1", "2", "3", "4"];
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActive] = useState(buttonValues.indexOf("1"));
  let gradient = functions.getColorGradient(
    buttonValues.length,
    theme.ingredient1,
    theme.ingredient2
  );
  let buttons = buttonValues.map((value, i) => {
    return (
      <MultiplierButton
        key={i}
        color={gradient[i]}
        value={value}
        isActive={i === activeIndex}
        onClick={() => {
          setActive(i);
          props.setIngredients(
            functions.multiplyIngredients(value, props.ingredients)
          );
        }}
      />
    );
  });
  return (
    <MultiplierButtonsDiv style={{ color: theme.ingredient1 }}>
      {buttons}
    </MultiplierButtonsDiv>
  );
};

MultiplierButtonTray.defaultProps = {
  gradient: [],
};

const MultiplierButtonsDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${units.rem1};

  // box model
  margin-top: ${units.rem0};

  // typography
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
`;
