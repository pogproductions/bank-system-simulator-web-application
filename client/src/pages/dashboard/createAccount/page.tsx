import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar, Menu, MenuItem  } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../../App.css';
import Appbar from '../../../components/AppBar';
import { createUser } from '../../../services/user_service';
import { createAccount } from '../../../services/account_service';
import { bgcolor, fontweight, hoverbgcolor, uppercase } from '../../../themes/theme';

function CreateAccount() {
    const [formData, setFormData] = useState({
        accountType: 'CHECKING' as string,
        balance: 0 as number,
        accounts: [],
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Signup data:', formData);
        // Add bank account creation logic here

        const account = {
            accountType: formData.accountType,
            balance: formData.balance,
            accounts: formData.accounts,
            userId: 1 // hardcoded for now, will change later

        };

        try {
            await createAccount(account);
            console.log('Bank account created successfully!');
        } catch (error) {
            console.error('Error creating bank account:', error);
        }

    };

    return (
        <div>
            <Appbar></Appbar>
            <Box className="Box" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card elevation={2} className='Card' sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
                    <Typography className='Header' fontWeight={'bolder'} variant="h4" mb={2} textAlign="center">
                        Create Bank Account
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            select
                            label="Account Type"
                            name="accountType"
                            fullWidth
                            margin="normal"
                            value={formData.accountType}
                            onChange={handleChange}
                        >
                            <MenuItem value="CHECKING">Checking</MenuItem>
                            <MenuItem value="SAVINGS">Savings</MenuItem>
                        </TextField>
                        <TextField
                            label="Balance"
                            name="balance"
                            type="number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.balance}
                            onChange={handleChange}
                        ></TextField>
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            required
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}    
                        ></TextField>
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, textTransform: uppercase,
                        fontWeight: fontweight,
                        bgcolor: bgcolor,
                        '&:hover': { bgcolor: hoverbgcolor } }}>
                            Create Bank Account
                        </Button>
                    </form>
                </Card>
            </Box>
        </div>
    );
}

export default CreateAccount;
