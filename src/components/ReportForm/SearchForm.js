import React, {useState} from 'react';
import Button from "../Button/Button";
import { TextFieldStyle , FormStyled, GetByIdContainer} from './SearchForm.style';
import Report from '../Report/Report';
import {ErrorMsg} from "../ErrorMsg/ErrorMsg";
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
        <GetByIdContainer>
            <FormStyled onSubmit={(e) => handleSubmit(e, input)}>
                <TextFieldStyle
                    id={"reportId"}
                    label="Report Id"
                    multiline
                    maxRows={1}
                    onChange={(e) => handleForm(e)}
                />
                <Button text={"Submit"} clicked={"true"}/>
            </FormStyled>
            {message && <ErrorMsg message={message} />}
            {reportData && <Report key={reportData._id} reportNumber={1} ReportData={reportData} deleteReport={deleteReport} isSearch={"true"}  />}
        </GetByIdContainer>
    )
}

export default SearchForm;
