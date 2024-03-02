import React from 'react';
import { ReportButton } from './Button.style';

const Button = (props) => {
    const { text, pressed, onClick } = props;
    return (
        <ReportButton pressed={pressed ? "true" : "false"} onClick={onClick}>{text}</ReportButton>
    );
};

export default Button;
