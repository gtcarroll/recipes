import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MultiplierButton } from "./MultiplierButton.js";
import {
  ColorButton,
  ColorInput,
  ThemeContext,
  functions,
  units,
  styles,
} from "../../common";

export const MultiplierButtonTray = (props) => {
  let buttonValues = ["1/2", "1", "2"];
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    activeIndex: buttonValues.indexOf("1"),
    customMultiple: "",
  });
  let gradient = functions.getColorGradient(
    buttonValues.length + 1,
    theme.ingredient1,
    theme.ingredient2
  );
  let buttons = buttonValues.map((value, i) => {
    return (
      <MultiplierButton
        key={i}
        color={gradient[i]}
        value={value}
        isActive={i === state.activeIndex}
        onClick={() => {
          setState({
            activeIndex: i,
            customMultiple: "",
          });
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
      <ColorInput
        value={state.customMultiple}
        color={gradient[gradient.length - 1]}
        isActive={state.activeIndex === gradient.length - 1}
        onChange={(multiplier) => {
          setState({
            activeIndex: gradient.length - 1,
            customMultiple: multiplier,
          });
          props.setIngredients(
            functions.multiplyIngredients(multiplier, props.ingredients)
          );
        }}
      />
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
