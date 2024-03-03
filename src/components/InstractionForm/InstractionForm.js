import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, SubTitle} from './InstractionForm.style'
import {FormContainer, TextFieldStyle} from './SearchForm.style';
import {InstructionTitle} from "../Instruction/Instraction.style";
import Button from "../Button/Button";
import {Msg} from "../Msg/Msg";

// TextFieldStyle
const InstractionForm = (props) => {
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
            updatedFormData[id] = value;
        }
        setFormData(updatedFormData);
    }
    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        if (Object.keys(formData).length < 12) {
            setMessage("Please fill in all the fields");
            return;
        }

        const instruction={
            instructionName: formData.instructionName,
            contactNumber: formData.contactNumber,
            emailAddress: formData.emailAddress,
            incidentDate: `${formData.date} ${formData.time}`,
            incidentLocation: {
                city: formData.city,
                street: formData.street,
                buildingNumber: formData.buildingNumber
            },
            damageType: formData.damageType,
            effectedProperty: formData.effectedProperty,
            extentOfDamage: formData.extentOfDamage,
            estimatedRepairCost: formData.estimatedRepairCost,
            damageDescription: formData.damageDescription
        }
        const res = await createInstruction(instruction);
        console.log(res);
        if (res) {
            setMessage("Instraction Created Successfully");
            setIsSuccess(true);
            setIsError(true);
        } else {
            setMessage("Instraction Creation Failed");
            setIsSuccess(false)
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {formMod === "create" && <InstructionTitle>Create Instruction</InstructionTitle>}
            {formMod === "update" && <InstructionTitle>Update Instruction</InstructionTitle>}
            {!isSuccess &&
                <FormStyle onSubmit={(e) => handleSubmit(e, formData)}>
                    <ColumnContainer>
                        <SubTitle>Instruction Info</SubTitle>
                        <TextFieldStyle
                            id={"instructionName"}
                            label="Instructioner Full Name"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
                        <TextFieldStyle
                            id={"contactNumber"}
                            label="Contact Number"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
                        <TextFieldStyle
                            id={"emailAddress"}
                            label="Email Address"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>Date and Time of the Incident</SubTitle>
                        <RowContainer>
                            <TextFieldStyle
                                id={"date"}
                                label="Date"
                                multiline
                                width={"45%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextFieldStyle
                                id={"time"}
                                label="Time"
                                multiline
                                width={"45%"}
                                onChange={(e) => handleForm(e)}
                            /></RowContainer>
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>Address of the Incident</SubTitle>
                        <RowContainer>
                            <TextFieldStyle
                                id={"city"}
                                label="City"
                                multiline
                                width={"30%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextFieldStyle
                                id={"street"}
                                label="Street"
                                multiline
                                width={"30%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextFieldStyle
                                id={"buildingNumber"}
                                label="Building Number"
                                multiline
                                width={"30%"}
                                onChange={(e) => handleForm(e)}/>
                        </RowContainer>
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>Address of the Incident</SubTitle>
                        <TextFieldStyle
                            id={"damageType"}
                            label="Damage Type"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
                        <TextFieldStyle
                            id={"effectedProperty"}
                            label="Parts of the Property Affected"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
                        <TextFieldStyle
                            id={"extentOfDamage"}
                            label="The extent of the Damage"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}/>
                        <TextFieldStyle
                            id={"estimatedRepairCost"}
                            label="Estimated Repair Cost"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}/>
                        <TextFieldStyle
                            id={"damageDescription"}
                            label="Description of the Cause"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}/>
                    </ColumnContainer>
                    <Button text={"Submit"} clicked={false} onSumbit/>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default InstractionForm;
