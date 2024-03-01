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
    useEffect(() => {
        getDamageReports().then((data) => {
            setReports(data)
        })
    }, [])
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
