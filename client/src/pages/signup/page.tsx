import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar  } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../App.css';
import Appbar from '../../components/AppBar';
import { createUser } from '../../services/user_service';
import { bgcolor, fontweight, hoverbgcolor, uppercase } from '../../themes/theme';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        role: 'USER' as string,
        email: '',
        timestamp: new Date().toISOString(),
        accounts: [],
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Signup data:', formData);
        // Add signup logic here

        const user = {
            name: formData.name,
            role: formData.role,
            email: formData.email,
            timestamp: formData.timestamp,
            accounts: formData.accounts
        };

        try {
            const response = await createUser(user);
            console.log('User created:', response);
        } catch (err) {
            console.error("Error creating user");
        }

    };

    return (
        <div>
            <Appbar></Appbar>
            <Box className="Box" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card elevation={2} className='Card' sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
                    <Typography className='Header' fontWeight={'bolder'} variant="h4" mb={2} textAlign="center">
                        Bank System Signup
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.name}
                            onChange={handleChange}
                        ></TextField>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                        ></TextField>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
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
                            Sign Up
                        </Button>
                    </form>
                    <Typography>Already have an account? <Link to='/login' >Login</Link></Typography>
                </Card>
            </Box>
        </div>
    );
}

export default Signup;
