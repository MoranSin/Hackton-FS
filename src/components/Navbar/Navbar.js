import React from 'react'
import { NavigateStyle, ButtonContainer } from './Navbar.style'
import Button from "../Button/Button";

const Navbar = (props) => {
    const {isGetAll, isGetById, isCreate} = props;
    const [getAll, setGetAll] = isGetAll;
    const [getById, setGetById] = isGetById;
    const [create, setCreate] = isCreate;

    return (
        <NavigateStyle>
            <ButtonContainer>
                <Button text="Get All Reports" pressed={getAll} onCl></Button>
                <Button text="Get Report By id" pressed={getById}></Button>
                <Button text="Create Report" pressed={create}></Button>
            </ButtonContainer>
        </NavigateStyle>
    )
}

export default Navbar;
