import React from 'react';
import { Container, Typography } from '@material-ui/core';

const InfoLogo = ({ logo, text }) => {
    return (
        <Container fixed>
            <img alt={text} src={logo} />
            <Typography variant="subtitle1" gutterBottom>{text}</Typography>
        </Container>
    )
}

export default InfoLogo
