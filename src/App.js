import React, {useEffect, useState} from 'react'
import {deleteDamageReport, getDamageReportById, getDamageReports} from './API/reports.api'
import {ErrorMsg} from "./components/ErrorMsg/ErrorMsg";
import Header from './components/Header/Header';
import ReportList from './components/Report/ReportList';
import SearchForm from "./components/ReportForm/SearchForm";
import ReportFrom from "./components/ReportForm/ReportFrom";
import CircularProgress from '@mui/material-next/CircularProgress';
import {MainStyle,} from "./App.style";

const App = () => {
    const [isGetAll, setIsGetAll] = useState(true);
    const [isGetById, setIsGetById] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [reports, setReports] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            setIsLoading(true);
            const reportsRes = await getDamageReports();
            setIsLoading(false);
            if (!reportsRes?.data.length === 0)
                setMessage("Error fetching reports");
            setReports(reportsRes?.data);
        } catch (err) {
            setMessage(err.message);
        }
    }

    const fetchReportById = async (id) => {
        try {
            console.log(id);
            const reportRes = await getDamageReportById(id);
            console.log(reportRes);
            if (!reportRes?.data.length === 0)
                setMessage("Error fetching reports");
            return reportRes?.data;
        } catch (err) {
            setMessage(err.message);
        }
    }

    const deleteReport = async (id) => {
        try {
            await updateState();
            setIsLoading(true);
            await deleteDamageReport(id);
            await fetchReports();
            setIsLoading(false);
            await updateState('getall');
        } catch (err) {
            setMessage(err.message);
        }
    }

    const updateState = async (state) =>  {
        setIsGetAll(false);
        setIsGetById(false);
        setIsCreate(false);
        setIsUpdate(false);
        switch (state) {
            case 'getall':
                setIsGetAll(true);
                await fetchReports();
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
    }

    return (
        <div className="App">
            <Header isGetAll={isGetAll} isGetById={isGetById} isCreate={isCreate} updateState={updateState}/>
            <MainStyle>
                {message && <ErrorMsg msg={message}/>}
                {isGetAll && isLoading && !message ? <CircularProgress color="primary"/> : null}
                {!isGetById && !isLoading && isGetAll && reports.length > 0 && (
                    <ReportList reports={reports} isUpdate={isUpdate} isDelete={isDelete}
                                deleteReport={deleteReport} isSearch={"false"}/>)}
                {isGetById && <SearchForm getReportByid={fetchReportById} message={message} setMessage={setMessage} deleteReport={deleteReport}/>}
                {isCreate && <ReportFrom />}
            </MainStyle>
        </div>
    );
}

export default App;
