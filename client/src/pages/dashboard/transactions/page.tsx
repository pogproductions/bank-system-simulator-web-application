import { useState } from 'react';
import React from 'react';
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Appbar from '../../../components/AppBar';
import { MenuItem } from '@mui/material';
import { createTransaction } from '../../../services/transactions_service';
import { Transaction } from '../../../interfaces/transaction_interface';

function Transactions() {

    const [formData, setFormData] = useState({
        type: 'DEPOSIT' as string,
        amount: 0 as number
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, 
            [name]: name === 'amount' ? Number(value) : value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Transaction data:', formData);
        // Add transaction logic here
        const transaction : Transaction = {
            type: formData.type,
            amount: formData.amount,
            date: new Date().toISOString(),
        };

        createTransaction(transaction)
            .then(response => {
                console.log('Transaction created:', response);
            })
            .catch(err => {
                console.error("Error creating transaction", err);
            });
    };

    return (
        <div>
            <Appbar></Appbar>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card elevation={2} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
                    <Typography variant="h4" fontWeight={'bolder'} mb={2} textAlign="center">
                        Transactions
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            select
                            label="Transaction Type"
                            name="type"
                            fullWidth
                            margin="normal"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <MenuItem value="DEPOSIT">Deposit</MenuItem>
                            <MenuItem value="WITHDRAWAL">Withdrawal</MenuItem>
                            <MenuItem value="TRANSFER">Transfer</MenuItem>
                            <MenuItem value="PAYMENT">Payment</MenuItem>
                            <MenuItem value="FEE">Fee</MenuItem>
                            <MenuItem value="REFUND">Refund</MenuItem>
                        </TextField>
                        <TextField
                            label="Amount"
                            name="amount"
                            type="number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.amount}
                            onChange={handleChange}    
                        ></TextField>
                        <Button 
                            type="submit"
                            disabled={!formData.type || formData.amount <= 0} 
                            variant="contained" 
                            color="primary" 
                            fullWidth sx={{ mt: 2, textTransform: 'uppercase', fontWeight: 600, bgcolor: '#0B3D91', '&:hover': { bgcolor: '#092C6B' } }}
                            >
                            Submit
                        </Button>
                    </form>
                </Card>
            </Box>
        </div>
    );
}

export default Transactions