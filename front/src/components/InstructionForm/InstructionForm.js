import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, SubTitle} from './InstructionForm.style'
import {FormContainer, TextFieldStyle} from './SearchForm.style';
import {InstructionStyle, InstructionTitle} from "../Instruction/Instruction.style";
import Button from "../Button/Button";
import {Msg} from "../Msg/Msg";

// TextFieldStyle
const InstructionForm = (props) => {
    const {formMod, message, setMessage, createInstruction, setIsError, } = props
    const [formData, setFormData] = React.useState([]);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleForm = async (e) => {
        const {id, value} = e.currentTarget || e.target;
        const updatedFormData = {...formData};
        setMessage("");
        if (value === '') {
            delete updatedFormData[id];
        } else {
            if(id === "instructions"){
                updatedFormData[id] = value.split(',');
            }
            else{
            updatedFormData[id] = value;
            }
        }
        setFormData(updatedFormData);
    }
    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        if (Object.keys(formData).length < 3) {
            setMessage("Please fill in all the fields");
            return;
        }

        const instruction={
            injuryType: formData.injuryType,
            description: formData.description,
            instructions: formData.instructions,
        }
        const res = await createInstruction(instruction);
        console.log(res);
        if (res) {
            setMessage("Instruction Created Successfully");
            setIsSuccess(true);
            setIsError(true);
        } else {
            setMessage("Instruction Creation Failed");
            setIsSuccess(false)
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {formMod === "create" && <InstructionTitle>Create Report</InstructionTitle>}
            {formMod === "update" && <InstructionTitle>Update Report</InstructionTitle>}
            {!isSuccess &&
                <FormStyle onSubmit={(e) => handleSubmit(e, formData)}>
                    <ColumnContainer>
                        <SubTitle>Injury Type</SubTitle>
                        <RowContainer>
                            <TextFieldStyle
                                id={"injuryType"}
                                label="Injury Type"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                           </RowContainer>
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>Description of the Instruction</SubTitle>
                        <RowContainer>
                            <TextFieldStyle
                                id={"description"}
                                label="Description"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                        </RowContainer>
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>Instructions</SubTitle>
                        <TextFieldStyle
                            id={"instructions"}
                            label="Instructions"
                            multiline
                            width={"100%"}
                            placeholder="Enter each step seperated by ,"
                            onChange={(e) => handleForm(e)}
                        />
                    </ColumnContainer>
                    <Button text={"Submit"} clicked={false} onSumbit/>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default InstructionForm;
