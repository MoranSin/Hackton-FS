import axios from 'axios';

const baseURL = "https://report-service-mh3t.onrender.com";

export const getDamageReports = async () => {
    return await axios.get(`${baseURL}/reports`);
}

export const getDamageReportById = async (id) => {
    return await axios.get(`${baseURL}/reports/${id}`);
}

export const createDamageReport = async (report) => {
    return await axios.post(`${baseURL}/reports`, report);
}

export const updateDamageReport = async (id, report) => {
    return await axios.put(`${baseURL}/reports/${id}`, report);
}

export const deleteDamageReport = async (id) => {
    return await axios.delete(`${baseURL}/reports/${id}`);
}
