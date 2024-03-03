import axios from 'axios';

const baseURL = "https://firstaidinstructions.onrender.com";

export const getfirs = async () => {
    return await axios.get(`${baseURL}/firstAid`);
}

export const getReportById = async (id) => {
    return await axios.get(`${baseURL}/firstAid/${id}`);
}

export const createReport = async (report) => {
    return await axios.post(`${baseURL}/firstAid`, report);
}

export const updateReport = async (id, report) => {
    return await axios.put(`${baseURL}/firstAid/${id}`, report);
}

export const deleteReport = async (id) => {
    return await axios.delete(`${baseURL}/firstAid/${id}`);
}
