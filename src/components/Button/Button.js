import React from 'react';
import { ReportButton } from './Button.style';

const Button = (props) => {
    const { text, clicked, onClick } = props;
    return (
        <ReportButton clicked={clicked ? "true" : "false"} onClick={onClick}>{text}</ReportButton>
    );
};

export default Button;
