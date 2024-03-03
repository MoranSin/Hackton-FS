import React, {useState} from 'react';
import Button from "../Button/Button";
import { TextFieldStyle , FormStyled, FormContainer} from './SearchForm.style';
import Report from '../Report/Report';
import {Msg} from "../Msg/Msg";

const SearchForm = ({getReportByid, message, setMessage, deleteReport}) => {
    const [input, setInputData] = useState('');
    const [reportData, setReportData] = useState('');

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
            const report = await getReportByid(input);
            setReportData(report);
            console.log(reportData)
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <FormContainer>
            <FormStyled onSubmit={(e) => handleSubmit(e, input)}>
                <TextFieldStyle
                    id={"reportId"}
                    label="Report Id"
                    multiline
                    width={"45%"}
                    maxRows={1}
                    onChange={(e) => handleForm(e)}
                />
                <Button text={"Submit"} clicked={"true"}/>
            </FormStyled>
            {message && <Msg message={message} />}
            {reportData && <Report key={reportData._id} reportNumber={1} ReportData={reportData} deleteReport={deleteReport} isSearch={"true"}  />}
        </FormContainer>
    )
}

export default SearchForm;
