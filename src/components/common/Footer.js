import React from "react";
import styled from "styled-components";
import { units } from "./units";
import froggy from "../../assets/photos/froggychef_dark_lg.png";
import froggyLight from "../../assets/photos/froggychef_light.png";
// import froggyDark from "../../assets/photos/froggychef_dark.png";

export const Footer = (props) => {
  return (
    <FooterDiv>
      <img
        style={{ maxWidth: units.width.frog, marginTop: "-" + units.rem2 }}
        draggable="false"
        src={froggy}
        alt="froggy chef"
      />
      {/* <img
        style={{
          maxWidth: units.width.frog,
          marginTop: "-" + units.rem2,
        }}
        draggable="false"
        src={froggyDark}
        alt="froggy chef"
      /> */}
      <img
        style={{
          maxWidth: units.width.frog,
          marginTop: "-" + units.rem2,
        }}
        draggable="false"
        src={froggyLight}
        alt="froggy chef"
      />
    </FooterDiv>
  );
};

Footer.defaultProps = {};

const FooterDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  height: ${units.rem5};
`;
