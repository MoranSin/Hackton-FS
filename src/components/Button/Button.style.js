import styled from 'styled-components'

export const ReportButton = styled.button`
    border: 1px solid #7e7e7e;
    border-radius: 25px;
    padding: 8px 15px;
    margin: 7px 5%;
    font-size: 1.1em;
    background-color: ${({clicked}) => (clicked === "true" ? '#ae7777' : 'transparent')};
    color: ${({clicked}) => (clicked === "true" ? '#ffffff' : '#7e7e7e')};
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background-color: #ae7777;
        color: white;
        border: 1px solid #ae7777;
    }
`;
