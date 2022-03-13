import React from "react";
import styled from "styled-components";
import { Instruction } from ".";
import { Header2, units } from "../../common";

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
        {...step}
      />
    );
  });
  return (
    <InstructionListDiv>
      <Header2 text="Instructions" />
      <Instructions>{instructionList}</Instructions>
    </InstructionListDiv>
  );
};

InstructionList.defaultProps = {
  instructions: {
    prep: "_prep_",
    steps: [],
  },
};

const InstructionListDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  margin: 0 -${units.rem2};
  border-radius: ${units.rem1};
  max-width: calc(${units.width.content} + ${units.rem2} + ${units.rem2});
  //padding: ${units.rem2} 0;
`;

const Instructions = styled.div`
  // box model
  margin-top: ${units.rem1};
`;
