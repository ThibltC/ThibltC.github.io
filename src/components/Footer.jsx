import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Typography from './MuiTypography';


const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.colors.black,
        height: '130px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center'
    },
}));


const Footer = () => {

    const theme = useTheme();

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div>
                <LinkedInIcon style={{ color: theme.palette.colors.primary }} />
                <GitHubIcon style={{ color: theme.palette.colors.primary }} />
            </div>
            <Typography variant='caption' color='textSecondary'>Dernière mise à jour {Date.now()}</Typography>
            <Typography variant='caption' color='textSecondary'>© 2020 Portfolio Thibault CHARDONNET</Typography>
        </div>
    );
};

export default Footer;
