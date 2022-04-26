import React from "react";
import styled from "styled-components";
import { units } from "../../context";
import { Header3 } from "../../common";
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
        ingredientsRef={props.ingredientsRef}
        {...subtask}
      />
    );
  });
  return (
    <InstructionDiv>
      <Heading>
        <NumberBubble number={props.number} />
        <Header3 text={props.task} />
      </Heading>
      {subtaskList.length > 0 && (
        <Content>
          <SubTasks>{subtaskList}</SubTasks>
        </Content>
      )}
    </InstructionDiv>
  );
};

Instruction.defaultProps = {
  task: "_task_",
  gradient: [],
  subtasks: [],
  number: 2,
};

const InstructionDiv = styled.li`
  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  margin: 0;
  padding-top: ${units.rem1};
`;

const Heading = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  margin-bottom: ${units.rem2};
`;

const Content = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  // box model
  margin: ${units.rem2};
  margin-top: 0;
`;

const SubTasks = styled.ol`
  // flexbox
  display: flex;
  flex-direction: column;
  gap: ${units.rem1};
`;
