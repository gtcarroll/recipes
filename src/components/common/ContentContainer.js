import React, { useContext, useState } from "react";
import styled from "styled-components";
import { units, styles } from "../context";

export const ContentContainer = (props) => {
  return (
    <ContentDiv
      style={{
        width: props.width,
        flexWrap: props.flexWrap,
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
      }}
    >
      {props.children}
    </ContentDiv>
  );
};

ContentContainer.defaultProps = {
  width: "100%",
  flexWrap: "nowrap",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const ContentDiv = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  gap: ${units.rem5};

  // box model
  max-width: calc(100vw - 2 * ${units.rem4});
  padding: ${units.rem4};
`;
