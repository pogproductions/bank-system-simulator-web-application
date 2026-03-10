import axios from 'axios';
import { Account } from '../interfaces/account_interface';

const API_FULLURL = 'http://localhost:8080'; // your Spring backend URL

export const getAccounts = async () => {
    try {
        const response = await axios.get(`${API_FULLURL}/accounts`);
        return response.data;
    } catch (err) {
        console.error("Error fetching accounts API");
        throw err; 
    }
};

export const createAccount = async (account: Account) => {
    try {
        await axios.post(`${API_FULLURL}/account`, account);
    } catch (err) {
        console.error("Error creating an account");
        throw err;
    }
};

export const updateAccount = async (account: Account) => {
    try {
        await axios.put(`${API_FULLURL}/account/${account.id}`, account);
    } catch (err) {
        console.error("Error updating an account");
        throw err;
    }
};

export const deleteAccount = async (id: number) => {
    try {
        await axios.delete(`${API_FULLURL}/account/${id}`);
    } catch (err) {
        console.error("Error deleting an account");
        throw err;
    }
};