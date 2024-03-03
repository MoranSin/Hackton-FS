import React from 'react';
import { InstructionListStyle } from './InstructionList.style';
import Isntraction from "././Instruction";
const InstructionList = ({ Instructions, deleteInstruction, isSearch }) => {
  return (
        <InstructionListStyle>
            {Instructions.map((Instruction, index) => (
                <Instruction key={Instruction._id} InstructionNumber={index + 1} InstructionData={Instruction} deleteInstruction={deleteInstruction} isSearch={isSearch} />
            ))}
        </InstructionListStyle>
  );
};

export default InstructionList;
