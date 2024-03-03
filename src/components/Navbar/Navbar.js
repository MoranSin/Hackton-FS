import React, {useState} from 'react';
import { ButtonContainer, NavigateStyle } from './Navbar.style';
import Button from "../Button/Button";

const Navbar = ({ isGetAll, isGetById, isCreate, updateAppState}) => {
    const [getAll, setGetAll] = useState(isGetAll);
    const [getById, setGetById] = useState(isGetById);
    const [create, setCreate] = useState(isCreate);

    const updateNavbarState = (state) => {
        setGetAll(false);
        setGetById(false);
        setCreate(false);
        switch (state) {
            case 'getall':
                setGetAll(true);
                break;
            case 'getbyid':
                setGetById(true);
                break;
            case 'create':
                setCreate(true);
                break;
            default:
                setGetAll(true);
                break;
        }
        updateAppState(state);
    };

    return (
        <NavigateStyle>
            <ButtonContainer>
                <Button text="Get All Reports" clicked={getAll} onClick={() => updateNavbarState('getall')} />
                <Button text="Get Instraction By id" clicked={getById} onClick={() => updateNavbarState('getbyid')} />
                <Button text="Create Instraction" clicked={create} onClick={() => updateNavbarState('create')} />
            </ButtonContainer>
        </NavigateStyle>
    );
};

export default Navbar;
