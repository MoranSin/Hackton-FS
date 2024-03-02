import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, SubTitle} from './ReportForm.style'
import {FormContainer, TextFieldStyle} from './SearchForm.style';
import {ReportTitle} from "../Report/Report.style";
import Button from "../Button/Button";
import {Msg} from "../Msg/Msg";

// TextFieldStyle
const ReportForm = (props) => {
    const {formMod, message, setMessage, createReport, setIsError, updateReprot } = props
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

        const report={
            reportName: formData.reportName,
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
        const res = await createReport(report);
        console.log(res);
        if (res) {
            setMessage("Report Created Successfully");
            setIsSuccess(true);
            setIsError(true);
        } else {
            setMessage("Report Creation Failed");
            setIsSuccess(false)
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {formMod === "create" && <ReportTitle>Create Report</ReportTitle>}
            {formMod === "update" && <ReportTitle>Update Report</ReportTitle>}
            {!isSuccess &&
                <FormStyle onSubmit={(e) => handleSubmit(e, formData)}>
                    <ColumnContainer>
                        <SubTitle>Reporter Info</SubTitle>
                        <TextFieldStyle
                            id={"reportName"}
                            label="Reporter Full Name"
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

export default ReportForm;
