import React from 'react';
import { InstractionListStyle } from './InstractionList.style';
import Isntraction from "././Instraction";
const InstractionList = ({ reports, deleteReport, isSearch }) => {
  return (
        <InstractionListStyle>
            {reports.map((report, index) => (
                <Instraction key={report._id} reportNumber={index + 1} ReportData={report} deleteReport={deleteReport} isSearch={isSearch} />
            ))}
        </InstractionListStyle>
  );
};

export default InstractionList;
