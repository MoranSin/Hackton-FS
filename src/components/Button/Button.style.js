import styled from 'styled-components'

export const ReportButton = styled.button`
    border: 1px solid #7793AE;
    border-radius: 25px;
    padding: 8px 15px;
    margin: 7px 5%;
    font-size: 1em;
    background-color: ${({ clicked }) => (clicked === "true" ? '#7793AE' : 'transparent')};
    color: ${({ clicked }) => (clicked === "true" ? '#ffffff' : '#778DA3')};
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background-color: #7793AE;
        color: white;
        border: 1px solid #7793AE;
    }
`;
