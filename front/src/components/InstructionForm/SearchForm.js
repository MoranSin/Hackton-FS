import React, {useState} from 'react';
import Button from "../Button/Button";
import { TextFieldStyle , FormStyled, FormContainer} from './SearchForm.style';
import {Msg} from "../Msg/Msg";
import InstructionComp from "../Instruction/Instruction";

const SearchForm = ({getInstructionByid, message, setMessage, deleteReport}) => {
    const [input, setInputData] = useState('');
    const [firstAidInstruction, setfirstAidInstruction] = useState('');

    const handleForm = async (e) => {
        const {reportId, value} = e.currentTarget;
        const updatedInput = {...input};
        setMessage("");
        if (value === '') {
            delete updatedInput[reportId];
        }else {
            updatedInput[reportId] = value;
        }
        setInputData(value);
    }

    const handleSubmit = async (e, input) => {
        e.preventDefault();
        try {
            setMessage("");
            const firstAidInstruction = await getInstructionByid(input);
            setfirstAidInstruction(firstAidInstruction);
            console.log(firstAidInstruction);
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <FormContainer>
            <FormStyled onSubmit={(e) => handleSubmit(e, input)}>
                <TextFieldStyle
                    id={"firstAidId"}
                    label="Instraction Id"
                    multiline
                    width={"45%"}
                    maxRows={1}
                    onChange={(e) => handleForm(e)}
                />
                <Button text={"Submit"} clicked={"true"}/>
            </FormStyled>
            {message && <Msg message={message} />}
            {firstAidInstruction && <InstructionComp key={firstAidInstruction._id} InstructionData={firstAidInstruction} deleteReport={deleteReport} isSearch={"true"}  />}
        </FormContainer>
    )
}

export default SearchForm;