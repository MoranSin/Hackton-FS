import React, {useEffect, useState} from 'react'
import {createDamageInstraction, deleteDamageInstraction, getDamageInstractionById, getDamageInstractions, updateDamageInstraction} from './API/instractions.api'
import {Msg} from "./components/Msg/Msg";
import Header from './components/Header/Header';
import InstractionList from './components/Instraction/InstractionList';
import SearchForm from "./components/InstractionForm/SearchForm";
import InstractionFrom from "./components/InstractionForm/InstractionForm";
import CircularProgress from '@mui/material-next/CircularProgress';
import {MainStyle,} from "./App.style";

const App = () => {
    const [isGetAll, setIsGetAll] = useState(true);
    const [isGetById, setIsGetById] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [instractions, setInstractions] = useState([]);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchInstractions();
    }, []);

    const fetchIstractions = async () => {
        try {
            setIsLoading(true);
            const InstractionsRes = await getDamageInstractions();
            setIsLoading(false);
            if (!InstractionsRes?.data.length === 0)
                setMessage("Error fetching Instractions");
            setInstractions(InstractionsRes?.data);
        } catch (err) {
            setMessage(err.message);
        }
    }

    const fetchInstractionById = async (id) => {
        try {
            console.log(id);
            const InstractionRes = await getDamageInstractionById(id);
            console.log(InstractionRes);
            if (!InstractionRes?.data.length === 0)
                setMessage("Error fetching Instractions");
            return InstractionRes?.data;
        } catch (err) {
            setMessage(err.message);
        }
    }

    const createInstraction = async (Instraction) => {
        try {
            const res = await createDamageInstraction(Instraction)
            if (!res) throw new Error("Error creating Instraction");
            return res?.data;
        } catch (err) {
            setMessage(err.message);
        }
    }

    const updateInstraction = async (id, Instraction) => {
        try {
            const res = await createDamageInstraction(Instraction)
            if (!res) throw new Error("Error creating Instraction");
            return res?.data;
        } catch (err) {
            setMessage(err.message);
        }
    }

    const deleteInstraction = async (id) => {
        try {
            await updateState();
            setIsLoading(true);
            await deleteDamageInstraction(id);
            await fetchInstractions();
            setIsLoading(false);
            await updateState('getall');
        } catch (err) {
            setMessage(err.message);
        }
    }

    const updateState = async (state) => {
        setIsGetAll(false);
        setIsGetById(false);
        setIsCreate(false);
        setIsUpdate(false);
        switch (state) {
            case 'getall':
                setIsGetAll(true);
                await fetchInstractions();
                break;
            case 'getbyid':
                setIsGetById(true);
                break;
            case 'create':
                setIsCreate(true);
                break;
            case 'update':
                setIsUpdate(true);
                break;
            default:
                break;
        }
        setMessage("");
        setIsError(false);
    }

    return (
        <div className="App">
            <Header isGetAll={isGetAll} isGetById={isGetById} isCreate={isCreate} updateState={updateState}/>
            <MainStyle>
                {message && <Msg msg={message} isError={isError}/>}
                {isGetAll && isLoading && !message ? <CircularProgress color="primary"/> : null}
                {!isGetById && !isLoading && isGetAll && Instractions.length > 0 && (
                    <InstractionList Instractions={Instractions} isUpdate={isUpdate} isDelete={isDelete}
                                     deleteInstraction={deleteInstraction} isSearch={"false"}/>)}
                {isGetById && <SearchForm getInstractionByid={fetchInstractionById} message={message} setMessage={setMessage}
                                          deleteInstraction={deleteInstraction}/>}
                {isCreate &&
                    <InstractionFrom formMod={"create"} message={message} setMessage={setMessage} createInstraction={createInstraction}
                                setIsError={setIsError}/>}
                {isUpdate &&
                    <InstractionFrom formMod={"update"} message={message} setMessage={setMessage} updateReprot={updateDamageInstraction}
                                setIsError={setIsError}/>}
            </MainStyle>
        </div>
    );
}

export default App;
