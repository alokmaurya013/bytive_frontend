import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = () => axios.get(API_BASE_URL);
export const updateTask = (id, data) => axios.put(`${API_BASE_URL}/${id}`, data);
export const addTask = (data) => axios.post(API_BASE_URL, data);
