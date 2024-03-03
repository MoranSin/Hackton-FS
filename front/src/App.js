import React, {useEffect, useState} from 'react'
import {getFirstAidInstructions, getFirstAidInstructionById, deleteFirstAidInstruction} from './API/instructions.api'
import {Msg} from "./components/Msg/Msg";
import Header from './components/Header/Header';
import InstructionList from './components/Instruction/InstructionList';
import CircularProgress from '@mui/material-next/CircularProgress';
import {MainStyle,} from "./App.style";
import SearchForm from "./components/InstructionForm/SearchForm";

const App = () => {
  const [isGetAll, setIsGetAll] = useState(true);
  const [isGetById, setIsGetById] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [instructions, setInstructions] = useState([]);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchInstructions();
  }, []);

  const fetchInstructions = async () => {
    try {
      setIsLoading(true);
      const instructionsRes = await getFirstAidInstructions();
      setIsLoading(false);
      if (!instructionsRes?.data.length === 0)
        setMessage("Error fetching Instructions");
      setInstructions(instructionsRes?.data);
    } catch (err) {
      setMessage(err.message);
    }
  }

  const fetchInstructionById = async (id) => {
    try {
      console.log(id);
      const instructionRes = await getFirstAidInstructionById(id);
      console.log(instructionRes);
      if (!instructionRes?.data.length === 0)
        setMessage("Error fetching instructions");
      return instructionRes?.data;
    } catch (err) {
      setMessage(err.message);
    }
  }

  const deleteInstruction = async (id) => {
    try {
      await updateState();
      setIsLoading(true);
      await deleteFirstAidInstruction(id);
      await fetchInstructions();
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
        await fetchInstructions();
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
          {message && <Msg msg={message} isError={"true"}/>}
          {isGetAll && isLoading && !message ? <CircularProgress color="primary"/> : null}
          {!isGetById && !isLoading && isGetAll && instructions.length > 0 && (
              <InstructionList instructions={instructions} isUpdate={isUpdate} isDelete={isDelete}
                               deleteInstruction={deleteInstruction} isSearch={"false"}/>)}
          {isGetById && <SearchForm getInstructionByid={fetchInstructionById} message={message} setMessage={setMessage}
                                    deleteInstruction={deleteInstruction}/>}
        </MainStyle>
      </div>
  );
}

export default App;