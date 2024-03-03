import axios from 'axios';

const baseURL = "https://firstaidinstructions.onrender.com";

export const getFirstAidInstructions = async () => {
    return await axios.get(`${baseURL}/firstAid`);
}

export const deleteFirstAidInstruction = async (id) => {
    return await axios.get(`${baseURL}/firstAid/${id}`);
}

export const createFirstAidInstruction = async (instruction) => {
    return await axios.post(`${baseURL}/firstAid`, instruction);
}

export const updateFirstAidInstructions = async (id, instruction) => {
    return await axios.put(`${baseURL}/firstAid/${id}`, instruction);
}

export const deleteFirstAidInstructions = async (id) => {
    return await axios.delete(`${baseURL}/firstAid/${id}`);
}
