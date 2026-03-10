import React from "react";
import { useState } from "react";
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar";

function Dashboard() {

    const balance: number = 210;

    return (
        <div>
            
            <Appbar></Appbar>

            <Box sx={{ p: 2}}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Typography fontWeight={'bold'} padding={2} variant="h3">Hey!</Typography>
                    <Box sx={{ display: 'flex', gap: 2, ml: 'auto', mt: 4}}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                bgcolor: '#0B3D91',
                                '&:hover': { bgcolor: '#092C6B' }
                            }}
                        >
                            <VisibilityOffIcon sx={{ mr: 1 }}></VisibilityOffIcon> Hide Balances
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                bgcolor: '#0B3D91',
                                '&:hover': { bgcolor: '#092C6B' }
                            }}
                        >
                            <AddIcon sx={{ mr: 1 }}></AddIcon> Deposit / Withdraw
                        </Button>
                    </Box>
                </Box> 

                <Typography fontWeight={50} color="textSecondary" padding={2} variant="h6">Financial overview</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 2 }}>

                    <Card elevation={2} className='balanceCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Total Balance <AccountBalanceWalletIcon></AccountBalanceWalletIcon> </Typography>
                        <Typography>$700.32</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Checking + Saving Accounts</Typography>
                    </Card>

                    <Card elevation={2} className='creditCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Credit Used <CreditCardIcon></CreditCardIcon> </Typography>
                        <Typography> ${balance} </Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Total Credit Card Debt</Typography>
                    </Card>

                    <Card elevation={2} className='networthCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Net Worth <CreditCardIcon></CreditCardIcon> </Typography>
                        <Typography>$800.32</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Total Assets minus Debts</Typography>
                    </Card>

                    <Card elevation={2} className='rewardsCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Rewards <CreditCardIcon></CreditCardIcon> </Typography>
                        <Typography>1200</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Total Reward Points</Typography>
                    </Card>

                </Box>

                <Typography fontWeight={50} color="textSecondary" padding={2} variant="h6">Your Accounts</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 2 }}>

                    <Card elevation={2} className='balanceCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Checking Account <AccountBalanceWalletIcon></AccountBalanceWalletIcon> </Typography>
                        <Typography>$700.32</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Checking + Saving Accounts</Typography>
                    </Card>

                    <Card elevation={2} className='creditCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Savings Account <CreditCardIcon></CreditCardIcon> </Typography>
                        <Typography>$300.32</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Total Credit Card Debt</Typography>
                    </Card>

                    <Card elevation={2} className='networthCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Credit Card <CreditCardIcon></CreditCardIcon> </Typography>
                        <Typography>$800.32</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Total Assets minus Debts</Typography>
                    </Card>

                    <Card elevation={2} className='rewardsCard' sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
                        <Typography variant="h5">Debit Card <CreditCardIcon></CreditCardIcon> </Typography>
                        <Typography>1200</Typography>
                        <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >Total Reward Points</Typography>
                    </Card>

                </Box>

            </Box>

        </div>

    )


}

export default Dashboard;