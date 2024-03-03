import styled from "styled-components";

export const ReportListStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-flow: column;
    }
`
