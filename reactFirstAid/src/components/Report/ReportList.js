import React from 'react';
import { ReportListStyle } from './ReportList.style';
import Report from "./Report";
const ReportList = ({ reports, deleteReport, isSearch }) => {
  return (
        <ReportListStyle>
            {reports.map((report, index) => (
                <Report key={report._id} reportNumber={index + 1} ReportData={report} deleteReport={deleteReport} isSearch={isSearch} />
            ))}
        </ReportListStyle>
  );
};

export default ReportList;
