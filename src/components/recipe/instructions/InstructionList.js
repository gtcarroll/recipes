import React from "react";
import styled from "styled-components";
import { units, styles } from "../../context";
import { Header2 } from "../../common";
import { Instruction } from ".";

export const InstructionList = (props) => {
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
  margin-top: ${units.rem1};
`;
