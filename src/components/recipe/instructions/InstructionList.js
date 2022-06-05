import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";
import { Header2, Note } from "../../common";
import { Instruction } from ".";

export const InstructionList = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let ingredientIndex = 0;
  let instructionList = props.instructions.steps.map((step, i) => {
    let prevIndex = ingredientIndex;
    step.subtasks.forEach((subtask) => {
      if (subtask.ingredients) ingredientIndex += subtask.ingredients.length;
    });
    return (
      <Instruction
        key={i}
        number={i + 1}
        units={props.units}
        gradient={props.gradient}
        ingredientIndex={prevIndex}
        ingredientsRef={props.ingredients}
        {...step}
      />
    );
  });
  return (
    <InstructionListDiv>
      <Header2 text="Instructions" />
      <Instructions>
        {props.instructions.prep && (
          <Instruction number={0} task={props.instructions.prep} />
        )}
        {instructionList}
      </Instructions>
      <Note>
        <i>{props.attribution.text} </i>
        {props.attribution.linkText && (
          <a
            href={props.attribution.linkRef}
            target="_blank"
            rel="noreferrer"
            style={{
              color: theme.instruction,
              transition: styles.transition.body,
            }}
          >
            {props.attribution.linkText}
          </a>
        )}
      </Note>
    </InstructionListDiv>
  );
};

InstructionList.defaultProps = {
  instructions: {
    prep: false,
    steps: [],
  },
};

const InstructionListDiv = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  margin: 0 -${units.rem2};
  border-radius: ${units.rem1};
  width: calc(100% + (2 * ${units.rem2}));
`;

const Instructions = styled.ol`
  // box model
  margin: ${units.rem1} 0;
`;
