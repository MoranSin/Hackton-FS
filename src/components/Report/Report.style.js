import styled from "styled-components";

const ReportStyle = styled.div`
    border: 1px solid #E5EAEF;
    border-radius: 25px;
    margin: 2%;
    display: flex;
    flex-flow: column;
    position: relative;
    min-width: 40%;
    max-width: 40%;
    min-height: 60%;
    @media (max-width: 768px) {
        min-width: 80%;
        max-width: 80%;
    }
`;

const ReportTitle = styled.h3`
    font-size: 1.3rem;
    margin: 22px 0 15px 0;
    align-self: center;
`;

const ReportUl = styled.ul`
    display: flex;
    flex-flow: column;
    list-style: circle outside;
    margin-left: 45px;
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

export { ReportStyle, ReportTitle, ReportUl, ReportLi, Buttons }
