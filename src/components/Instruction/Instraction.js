import React from 'react';
import Button from "../Button/Button";
import {Buttons, InstructionLi, InstructionStyle, InstructionTitle, InstructionUl} from "./Instruction.style";

const Instruction = (props) => {
    const {
        InstructionNumber, InstructionData, isUpdate, isDelete, deleteInstruction, isSearch
    } = props;

    return (
        <InstructionStyle>
            <InstructionTitle>Instruction Number: {InstructionNumber}</InstructionTitle>
            <InstructionUl>
                <InstructionLi>Instructioner Name: {InstructionData.InstructionName}</InstructionLi>
                <InstructionLi>Contact Number: {InstructionData.contactNumber}</InstructionLi>
                <InstructionLi>Email Address: {InstructionData.emailAddress}</InstructionLi>
                <InstructionLi>Date and Time of the
                    Incident: {InstructionData.incidentLocation.city}, {InstructionData.incidentLocation.street}, {InstructionData.incidentLocation.buildingNumber}</InstructionLi>
                <InstructionLi>location of the Incident: {InstructionData.InstructionName}</InstructionLi>
                <InstructionLi>Damage Type: {InstructionData.damageType}</InstructionLi>
                <InstructionLi>Parts of the Property Affected: {InstructionData.effectedProperty}</InstructionLi>
                <InstructionLi>The extent of the Damage: {InstructionData.extentOfDamage}</InstructionLi>
                <InstructionLi>Estimated Repair Cost: {InstructionData.estimatedRepairCost}</InstructionLi>
                <InstructionLi>Description of the Cause: {InstructionData.damageDescription}</InstructionLi>
            </InstructionUl>
            {isSearch === "false" && <Buttons>
                <Button text="Update Instruction" clicked={isUpdate}></Button>
                <Button text="Delete Instruction" clicked={isDelete} onClick={() => deleteInstruction(InstructionData._id)}></Button>
            </Buttons>}
        </InstructionStyle>
    );
};

export default Instruction;



