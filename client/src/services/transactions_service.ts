import axios from "axios";
import { Transaction } from "../interfaces/transaction_interface";

const API_FULLURL = 'http://localhost:8080'; // your Spring backend URL

export const getTransactions = async () => {
    try {
        const response = await axios.get(`${API_FULLURL}/transactions`);
        return response.data;
    } catch (err) {
        console.error("Error fetching transactions API");
        throw err; 
    }
};

export const createTransaction = async (transaction: Transaction) => {
    try {
        await axios.post(`${API_FULLURL}/transaction`, transaction);
    } catch (err) {
        console.error("Error creating a transaction");
        throw err;
    }
};

export const updateTransaction = async (transaction: Transaction) => {
    try {
        await axios.put(`${API_FULLURL}/transaction/${transaction.id}`, transaction);
    } catch (err) {
        console.error("Error updating a transaction");
        throw err;
    }
};

export const deleteTransaction = async (id: number) => {
    try {
        await axios.delete(`${API_FULLURL}/transaction/${id}`);
    } catch (err) {
        console.error("Error deleting a transaction");
        throw err;
    }
};