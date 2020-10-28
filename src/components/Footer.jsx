import { makeStyles, useTheme } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Typography from '../materialUI/MuiTypography';


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
                <IconButton onClick={() => window.open('https://www.linkedin.com/in/thibault-chardonnet-a4a61b167/')}>
                    <LinkedInIcon style={{ color: theme.palette.colors.primary }} />
                </IconButton>
                <IconButton onClick={() => window.open('https://github.com/ThibltC')}>
                    <GitHubIcon style={{ color: theme.palette.colors.primary }} />
                </IconButton>
            </div>
            <Typography variant='caption' color='textSecondary'>Dernière mise à jour 28/10/20</Typography>
            <Typography variant='caption' color='textSecondary'>© 2020 Portfolio Thibault CHARDONNET</Typography>
        </div>
    );
};

export default Footer;
