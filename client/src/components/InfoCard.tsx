import React from "react";
import {Card, Typography } from '@mui/material';

type InfoCardProps = {
    ClassName?: string;
    Title: string;
    Icon?: React.ReactNode;
    Value: string | number;
    Subtitle: string;
};

function InfoCard({ClassName, Title, Icon, Value, Subtitle}: InfoCardProps) {

    return (
        <Card elevation={2} className={ClassName} sx={{ padding: 4, maxWidth: 300, width: '100%' }}>
            <Typography variant="h5">{Title} {Icon} </Typography>
            <Typography>{Value}</Typography>
            <Typography variant="subtitle2" fontWeight={50} color="textSecondary" >{Subtitle}</Typography>
        </Card>
    );
}

export default InfoCard;