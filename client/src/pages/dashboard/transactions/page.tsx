import { useState } from 'react';
import React from 'react';
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Appbar from '../../../components/AppBar';

function Transactions() {

    const [formData, setFormData] = useState({
        transactionType: '',
        amount: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login data:', formData);
        // Add login logic here
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
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.transactionType}
                            onChange={handleChange}
                        ></TextField>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.amount}
                            onChange={handleChange}    
                        ></TextField>
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, textTransform: 'uppercase',
                        fontWeight: 600,
                        bgcolor: '#0B3D91',
                        '&:hover': { bgcolor: '#092C6B' } }}>
                            Submit
                        </Button>
                    </form>
                </Card>
            </Box>
        </div>
    );
}

export default Transactions