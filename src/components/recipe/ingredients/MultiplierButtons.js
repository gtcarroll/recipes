import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MultiplierButton } from "./MultiplierButton.js";
import { ThemeContext, functions, units } from "../../common";

export const MultiplierButtons = (props) => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActive] = useState(1);
  // let transparentColor = functions.addAlpha(props.color, 0.3);
  let buttonValues = ["1/2", "1", "2"];
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
        label={value}
        isActive={i === activeIndex}
        onClick={() => setActive(i)}
      />
    );
  });
  return (
    <MultiplierButtonsDiv style={{ color: theme.ingredient1 }}>
      <Label
        style={{
          color: gradient[activeIndex],
        }}
      ></Label>
      {buttons}
    </MultiplierButtonsDiv>
  );
};

MultiplierButtons.defaultProps = {
  gradient: [],
};

const Label = styled.div`
  // box model
  margin: auto 0;
`;

const MultiplierButtonsDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${units.rem1};

  // box model
  margin-top: ${units.rem0};

  // typography
  font-size: ${units.fontSize.body};
  font-family: ${units.fontFamily.monospace};
  font-weight: bold;
`;
