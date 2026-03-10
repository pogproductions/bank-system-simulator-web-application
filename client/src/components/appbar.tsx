import React from "react";
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";

function Appbar() {

    return (
        <AppBar position="static" sx={{ bgcolor: '#0B3D91', mb: 4 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Bank System
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;