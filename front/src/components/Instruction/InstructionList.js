import React from 'react';
import { InstractionListStyle } from './InstructionList.style';
import InstructionComp from "./Instruction";
const InstructionList = ({ instructions, deleteInstruction, isSearch }) => {
    return (
        <InstractionListStyle>
            {instructions.map((Instruction) => (
                <InstructionComp key={Instruction._id} InstructionData={Instruction} deleteInstruction={deleteInstruction} isSearch={isSearch} />
            ))}
        </InstractionListStyle>
    );
};


export default InstructionList;
