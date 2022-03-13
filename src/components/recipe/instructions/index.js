import { InstructionList } from "./InstructionList.js";
import { Instruction } from "./Instruction.js";
import { SubTask } from "./SubTask.js";
import { LetterBubble } from "./LetterBubble.js";
import { NumberBubble } from "./NumberBubble.js";

export { InstructionList, Instruction, SubTask, LetterBubble, NumberBubble };

export const countSubtask = (subtask) => {
  let count = 1;
  if (subtask.ingredients) count += subtask.ingredients.length;
  return count;
};
