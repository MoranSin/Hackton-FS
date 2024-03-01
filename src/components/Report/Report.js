import React from 'react';
import styled from 'styled-components'
import Button from "../Button/Button";

const ReportStyle = styled.div`
    border: 1px solid #E5EAEF;
    border-radius: 25px;
    margin: 10px;
    display: flex;
    flex-flow: column;
    width: 80%;
`;

const ReportTitle = styled.h3`
    font-size: 1.3rem;
    margin: 22px 0 15px 0;
    align-self: center;
`;

const ReportUl = styled.ul`
    display: flex;
    flex-flow: column;
    list-style: circle inside;
    margin-left:36px;
`;

const ReportLi = styled.li`
    padding: 3px;
`;

const Buttons = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 15px 0 22px 0;
`;


const Report = () => {
    return (
        <ReportStyle>
            <ReportTitle>Report Number: 06</ReportTitle>
            <ReportUl>
                <ReportLi>Reporter Name: Ruby Freeman</ReportLi>
                <ReportLi>Contact Number: 0543555555</ReportLi>
                <ReportLi>Email Address: ruby@gmail.com</ReportLi>
                <ReportLi>Date and Time of the Incident: 07/10/2023</ReportLi>
                <ReportLi>location of the Incident: Beeri, b 5</ReportLi>
                <ReportLi>Damage Type: War Damage</ReportLi>
                <ReportLi>Parts of the Property Affected: Car</ReportLi>
                <ReportLi>The extent of the Damage: Sever Damage</ReportLi>
                <ReportLi>Estimated Repair Cost: 70000</ReportLi>
                <ReportLi>Description of the Cause: The car was set on fire</ReportLi>
            </ReportUl>
            <Buttons>
                <Button text="Update Report" ></Button>
                <Button text="Delete Report" ></Button>
            </Buttons>
        </ReportStyle>
    );
};

export default Report;



