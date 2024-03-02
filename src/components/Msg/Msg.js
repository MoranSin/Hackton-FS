import React from "react";
import {MsgDiv} from "./Msg.style";

export const Msg = (props) => {
    const {msg, isError} = props;
    if (msg === "" || msg === undefined || msg === null) {
        return null;
    }

    return (
        <MsgDiv isError={isError}>
            <p>{msg}</p>
        </MsgDiv>
    )
}
