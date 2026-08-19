import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar  } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../App.css';
import Appbar from '../../components/AppBar';
import { createUser } from '../../services/user_service';
import { bgcolor, fontweight, hoverbgcolor, uppercase } from '../../themes/theme';

function Signup() {
    // this is the data that will be sent to the backend to create a new user, I added some default values for the role, timestamp and accounts for the time being
    const [formData, setFormData] = useState({
        username: '',
        role: 'USER' as string, // this is the default, manually if needed I can change specfic users that work at the bank to have the role of "EMPLOYEE" or "ADMIN"
        email: '',
        timestamp: new Date().toISOString(),
        accounts: [], // my goal for this is to hold the users savings and checking accounts, but I can change it if needed
        password: ''
    });

    // this function will update the formData state whenever the user types in the input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // this function gets called when the user submits the form, it will send the formData to the backend to create a new user
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Signup data:', formData);
        // Signup logic here

        // This variable holds all the form data in a table like format to send to the users table in the database
        const user = {
            username: formData.username,
            role: formData.role,
            email: formData.email,
            timestamp: formData.timestamp,
            accounts: formData.accounts,
            password: formData.password
        };

        // Call the createUser function from user_service to send the data to the backend and create a new user
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
                            label="Username"
                            name="username"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.username}
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
