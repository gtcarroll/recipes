import React, { useContext } from "react";
import styled from "styled-components";
import { LayoutContext } from "./layout-context";
import { units, styles } from "./styles";

export const Header3 = (props) => {
  const { layout } = useContext(LayoutContext);
  return (
    <Header3Div styles={{ fontSize: layout.fontSize.h3 }}>
      {props.text}
    </Header3Div>
  );
};

Header3.defaultProps = {
  text: "default text",
};

const Header3Div = styled.h3`
  // animation
  //transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin-left: ${units.rem1};

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;
