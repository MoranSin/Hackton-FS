import React from 'react';
import { InstructionButton } from './Button.style';

const Button = (props) => {
    const { text, clicked, onClick } = props;
    return (
        <InstructionButton clicked={clicked ? "true" : "false"} onClick={onClick}>{text}</InstructionButton>
    );
};

export default Button;
