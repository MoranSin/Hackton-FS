import axios from 'axios';

const baseURL = "https://firstaidinstructions.onrender.com";

export const getFirstAidInstructions = async () => {
    return await axios.get(`${baseURL}/firstAids`);
}

export const getFirstAidInstructionById = async (id) => {
    return await axios.get(`${baseURL}/firstAids/${id}`);
}

export const createFirstAidInstruction = async (instruction) => {
    return await axios.post(`${baseURL}/firstAids`, instruction);
}

export const updateFirstAidInstructions = async (id, instruction) => {
    return await axios.put(`${baseURL}/firstAids/${id}`, instruction);
}

export const deleteFirstAidInstruction = async (id) => {
    return await axios.delete(`${baseURL}/firstAids/${id}`);
}