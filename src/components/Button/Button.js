import React from 'react';
import { ReportButton } from './Button.style';

const Button = (props) => {
    const {text, pressed} = props;
    return (
        <ReportButton pressed={pressed}>{text}</ReportButton>
    );
};

export default Button;
