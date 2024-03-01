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
    margin-left: 36px;
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


const Report = (props) => {
    const {
        reportNumber, ReportData
    } = props;
    return (
        <ReportStyle>
            <ReportTitle>Report Number: {reportNumber}</ReportTitle>
            <ReportUl>
                <ReportLi>Reporter Name: {ReportData.reportName}</ReportLi>
                <ReportLi>Contact Number: {ReportData.contactNumber}</ReportLi>
                <ReportLi>Email Address: {ReportData.emailAddress}</ReportLi>
                <ReportLi>Date and Time of the Incident: {ReportData.incidentLocation.city}, {ReportData.incidentLocation.street}, {ReportData.incidentLocation.buildingNumber}</ReportLi>
                <ReportLi>location of the Incident: {ReportData.reportName}</ReportLi>
                <ReportLi>Damage Type: {ReportData.damageType}</ReportLi>
                <ReportLi>Parts of the Property Affected: {ReportData.effectedProperty}</ReportLi>
                <ReportLi>The extent of the Damage: {ReportData.extentOfDamage}</ReportLi>
                <ReportLi>Estimated Repair Cost: {ReportData.estimatedRepairCost}</ReportLi>
                <ReportLi>Description of the Cause: {ReportData.damageDescription}</ReportLi>
            </ReportUl>
            <Buttons>
                <Button text="Update Report"></Button>
                <Button text="Delete Report"></Button>
            </Buttons>
        </ReportStyle>
    );
};

export default Report;



