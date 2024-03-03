import React from 'react';
import Button from "../Button/Button";
import {Buttons, ReportLi, InstractionStyle, ReportTitle, ReportUl} from "./Instraction.style";

const Instraction = (props) => {
    const {
        reportNumber, ReportData, isUpdate, isDelete, deleteReport, isSearch
    } = props;

    return (
        <InstractionStyle>
            <ReportTitle>Instraction Number: {reportNumber}</ReportTitle>
            <ReportUl>
                <ReportLi>Reporter Name: {ReportData.reportName}</ReportLi>
                <ReportLi>Contact Number: {ReportData.contactNumber}</ReportLi>
                <ReportLi>Email Address: {ReportData.emailAddress}</ReportLi>
                <ReportLi>Date and Time of the
                    Incident: {ReportData.incidentLocation.city}, {ReportData.incidentLocation.street}, {ReportData.incidentLocation.buildingNumber}</ReportLi>
                <ReportLi>location of the Incident: {ReportData.reportName}</ReportLi>
                <ReportLi>Damage Type: {ReportData.damageType}</ReportLi>
                <ReportLi>Parts of the Property Affected: {ReportData.effectedProperty}</ReportLi>
                <ReportLi>The extent of the Damage: {ReportData.extentOfDamage}</ReportLi>
                <ReportLi>Estimated Repair Cost: {ReportData.estimatedRepairCost}</ReportLi>
                <ReportLi>Description of the Cause: {ReportData.damageDescription}</ReportLi>
            </ReportUl>
            {isSearch === "false" && <Buttons>
                <Button text="Update Instraction" clicked={isUpdate}></Button>
                <Button text="Delete Instraction" clicked={isDelete} onClick={() => deleteReport(ReportData._id)}></Button>
            </Buttons>}
        </InstractionStyle>
    );
};

export default Instraction;



