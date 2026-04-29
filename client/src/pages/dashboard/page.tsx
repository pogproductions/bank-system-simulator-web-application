import React from "react";
import { useState } from "react";
import { Box, Card, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import Appbar from "../../components/AppBar";
import InfoCard from "../../components/InfoCard";
import { Info } from "@mui/icons-material";
import { bgcolor, fontweight, hoverbgcolor, uppercase } from "../../themes/theme";

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
                                textTransform: uppercase,
                                fontWeight: fontweight,
                                bgcolor: bgcolor,
                                '&:hover': { bgcolor: hoverbgcolor }
                            }}
                        >
                            <VisibilityOffIcon sx={{ mr: 1 }}></VisibilityOffIcon> Hide Balances
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: uppercase,
                                fontWeight: fontweight,
                                bgcolor: bgcolor,
                                '&:hover': { bgcolor: hoverbgcolor }
                            }}
                        >
                            <AddIcon sx={{ mr: 1 }}></AddIcon> Deposit / Withdraw
                        </Button>
                    </Box>
                </Box> 

                <Typography fontWeight={50} color="textSecondary" padding={2} variant="h6">Financial overview</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 2 }}>

                    <InfoCard ClassName="balanceCard" Title="Total Balance" Icon={<AccountBalanceWalletIcon />} Value="$700.32" Subtitle="Checking + Saving Accounts"></InfoCard>
                    <InfoCard ClassName="creditCard" Title="Credit Used" Icon={<CreditCardIcon />} Value={`$${balance}`} Subtitle="Total Credit Card Debt"></InfoCard>
                    <InfoCard ClassName="networthCard" Title="Net Worth" Icon={<CreditCardIcon />} Value="$800.32" Subtitle="Total Assets minus Debts"></InfoCard>
                    <InfoCard ClassName="rewardsCard" Title="Rewards" Icon={<CreditCardIcon />} Value="1200" Subtitle="Total Reward Points"></InfoCard>

                </Box>

                <Typography fontWeight={50} color="textSecondary" padding={2} variant="h6">Your Accounts</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 2 }}>

                    <InfoCard ClassName="balanceCard" Title="Checking Account" Icon={<AccountBalanceWalletIcon />} Value="$700.32" Subtitle="Checking Account"></InfoCard>
                    <InfoCard ClassName="creditCard" Title="Savings Account" Icon={<CreditCardIcon />} Value="$300.32" Subtitle="Savings Account"></InfoCard>
                    <InfoCard ClassName="networthCard" Title="Credit Card" Icon={<CreditCardIcon />} Value="$800.32" Subtitle="Credit Card"></InfoCard>
                    <InfoCard ClassName="rewardsCard" Title="Debit Card" Icon={<CreditCardIcon />} Value="1200" Subtitle="Debit Card"></InfoCard>

                </Box>

            </Box>

        </div>

    )


}

export default Dashboard;