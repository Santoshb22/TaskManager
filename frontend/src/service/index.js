import axios from "axios";

const backendEndpoint = import.meta.env.VITE_API_URL;
const apiURL = `${backendEndpoint}/tasks`;

export const fetchTasks = async () => {
    const res = await axios.get(apiURL);
    return res.data;
};

export const createTask = async (formData) => {
    await axios.post(apiURL, formData);
};

export const updateTask = async (taskId, taskData) => {
    await axios.patch(`${apiURL}/${taskId}`, taskData);
};

export const deleteTask = async (taskId) => {
    await axios.delete(`${apiURL}/${taskId}`);
};


export const markTaskAsDone = async (taskId) => {
    await axios.patch(`${apiURL}/${taskId}`, { status: "DONE" });
};
  