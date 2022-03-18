import React from "react";
import styled from "styled-components";
import { units, styles } from "../../common";
import { SubTask, NumberBubble } from ".";

export const Instruction = (props) => {
  let ingredientIndex = props.ingredientIndex;
  let subtaskList = props.subtasks.map((subtask, i) => {
    // calc and pass starting index for each subtask
    let prevIndex = ingredientIndex;
    if (subtask.ingredients) {
      ingredientIndex += subtask.ingredients.length;
      ingredientIndex = Math.min(ingredientIndex, props.gradient.length);
    }
    return (
      <SubTask
        key={i}
        letter={String.fromCharCode(97 + i)}
        gradient={props.gradient}
        ingredientIndex={prevIndex}
        {...subtask}
        ingredientsRef={props.ingredientsRef}
      />
    );
  });
  return (
    <InstructionDiv>
      <Heading>
        <NumberBubble number={props.number} />
        <Task>{props.task}</Task>
      </Heading>
      <Content>
        <SubTasks>{subtaskList}</SubTasks>
      </Content>
    </InstructionDiv>
  );
};

Instruction.defaultProps = {
  task: "_task_",
  steps: [],
  gradient: [],
  number: 2,
};

const InstructionDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  margin: 0; //-${units.rem5};
  padding-top: ${units.rem1};
`;

const Heading = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  // box model
  margin: ${units.rem2};
`;

const Task = styled.h3`
  // box model
  margin: ${units.rem1} 0 0 ${units.rem1};

  // typography
  font-size: ${styles.fontSize.h3};
`;

const SubTasks = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  gap: ${units.rem1};
`;
