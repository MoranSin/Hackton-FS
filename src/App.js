import Header from './components/Header/Header';
import Report from './components/Report/Report';
import styled from 'styled-components'
import {useEffect, useState } from 'react'
import { getDamageReports } from './API/reports.api'

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const App = () => {
    const [reports, setReports] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try{
            const reportsRes = await getDamageReports();
            if(!reportsRes?.data.length === 0)
                setMessage("Error fetching reports");
            setReports(reportsRes?.data);
        }catch (err){
            setMessage(err.message);
        }
    }

  return (
    <div className="App">
        <Header />
        <Main>
            <Report />
        </Main>
    </div>
  );
}

export default App;
