import React, {useEffect, useState} from 'react'
import {getDamageReports} from './API/reports.api'
import {ErrorMsg} from "./components/ErrorMsg/ErrorMsg";
import Report from './components/Report/Report';
import Logo from "./assets/logo.png";
import Navbar from "./components/Navbar/Navbar";
import CircularProgress from '@mui/material-next/CircularProgress';
import {
    HeaderStyle,
    LineStyle,
    LogoStyle,
    LowerHeaderStyle,
    MainStyle,
    ReportList,
    UpperHeaderStyle
} from "./App.style";

const App = () => {
    const [isGetAll, setIsGetAll] = useState(true);
    const [isGetById, setIsGetById] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [reports, setReports] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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

    const updateState = (state) => {
        setIsGetAll(false);
        setIsGetById(false);
        setIsCreate(false);
        setIsUpdate(false);
        switch (state) {
            case 'getall':
                setIsGetAll(true);
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
                setIsGetAll(true);
                break;
        }
    }

    return (
        <div className="App">
            <HeaderStyle>
                <UpperHeaderStyle>
                    <LogoStyle src={Logo} alt="logo"/>
                </UpperHeaderStyle>
                <LineStyle>
                    <svg width="100%" height="1vh">
                        <line x1="0" y1="0" x2="100%" y2="0"></line>
                    </svg>
                </LineStyle>
                <LowerHeaderStyle>
                    <Navbar isGetAll={isGetAll} isGetById={isGetById} isCreate={isCreate} updateAppState={updateState}/>
                </LowerHeaderStyle>
                <LineStyle>
                    <svg width="100%" height="1vh">
                        <line x1="0" y1="0" x2="100%" y2="0"></line>
                    </svg>
                </LineStyle>
            </HeaderStyle>
            <MainStyle>
                {message && <ErrorMsg msg={message}/>}
                {isGetAll && isLoading ? <CircularProgress color="primary" />
                     : <ReportList>
                    {reports.length > 0 && reports.map((report, index) => <Report key={report._id}
                                                                                  reportNumber={index + 1}
                                                                                  ReportData={report}/>)}
                </ReportList>}

            </MainStyle>
        </div>
    );
}

export default App;
