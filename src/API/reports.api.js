import axios from 'axios';

const baseURL = "https://report-service-mh3t.onrender.com";

export const getDamageReports = async () => {
    const reports = await axios.get(`${baseURL}/reports`);
    return reports;
}

