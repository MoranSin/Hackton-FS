import React from 'react';
import Button from "../Button/Button";
import {
    Buttons,
    InstructionLi,
    InstructionStyle,
    InstructionTitle,
    InstructionUl,
    InstructionP
} from "./Instruction.style";

const InstructionComp = (props) => {
    const {
        InstructionData, isUpdate, isDelete, deleteInstruction, isSearch
    } = props;

    return (
        <InstructionStyle>
            <InstructionTitle>{InstructionData.injuryType}</InstructionTitle>
            <InstructionP>Description: {InstructionData.description}</InstructionP>
            <InstructionUl>{
                InstructionData.instructions.map((step, index) => (
                    <InstructionLi key={index}>Step {index + 1}: {step}</InstructionLi>
                ))
            }
            </InstructionUl>
            {isSearch === "false" && <Buttons>
                <Button text="Update Instruction" clicked={isUpdate}></Button>
                <Button text="Delete Instruction" clicked={isDelete}
                        onClick={() => deleteInstruction(InstructionData._id)}></Button>
            </Buttons>}
        </InstructionStyle>
    );
};

export default InstructionComp;