import React from 'react';
import Button from "../Button/Button";
import { ReportStyle, ReportTitle, ReportUl, ReportLi, Buttons } from "./Report.style";

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



