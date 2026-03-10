import axios from 'axios';
import { User } from '../interfaces/user_interface';

const API_FULLURL = 'http://localhost:8080'; // your Spring backend URL

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_FULLURL}/users`)
        return response.data;
    } catch (err) {
        console.error("Error fetching users API");
        throw err;
        
    }
};

export const createUser = async (user: User) => {
    try {
        const response = await axios.post(`${API_FULLURL}/user`, user);
        return response.data;
    } catch (err) {
        console.error("Error creating a user");
        throw err;
    }
};

export const updateUser = async (user: User) => {
    try {
        await axios.put(`${API_FULLURL}/user/${user.id}`, user);
    } catch (err) {
        console.error("Error updating a user");
        throw err;
    }
};

export const deleteUser = async (id: number) => {
    try {
        await axios.delete(`${API_FULLURL}/user/${id}`);
    } catch (err) {
        console.error("Error deleting a user");
        throw err;
    }
};