import React from 'react';
import styled from 'styled-components'

const ReportButton = styled.button`
    border: 1px solid #7793AE;
    border-radius: 25px;
    padding: 8px 15px;
    margin: 7px 5%;
    font-size: 1em;
    background-color: transparent;
    transition-duration: 0.4s;
    &:hover
    {
        background-color: #7793AE;
        color: white;
    }
`;

const Button = (props) => {
    const { text } = props;
    return (
        <ReportButton>{text}</ReportButton>
    );
};

export default Button;
