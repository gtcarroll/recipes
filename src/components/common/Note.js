import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, styles } from "../context";

export const Note = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <NoteDiv
      style={{
        color: theme.foreground,
        fontSize: props.fontSize,
      }}
    >
      <Bracket
        style={{
          color: theme.instruction,
        }}
      >
        &#123;
      </Bracket>{" "}
      {props.children}{" "}
      <Bracket
        style={{
          color: theme.instruction,
        }}
      >
        &#125;
      </Bracket>{" "}
    </NoteDiv>
  );
};

Note.defaultProps = {
  fontSize: null,
};

const NoteDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  margin: 0 auto;
`;

const Bracket = styled.span`
  // animation
  transition: ${styles.transition.body};
`;
