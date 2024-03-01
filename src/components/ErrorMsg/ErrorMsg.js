import React from "react";
import {ErrorDiv} from "./ErrorMsg.style";

export const ErrorMsg = (props) => {
    const {msg} = props;
    if (msg === "" || msg === undefined || msg === null) {
        return null;
    }

    return (
        <ErrorDiv>
            <p>{msg}</p>
        </ErrorDiv>
    )
}
