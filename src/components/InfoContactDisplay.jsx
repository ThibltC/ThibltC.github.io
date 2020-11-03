import React from 'react';

import Typography from '../materialUI/MuiTypography';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.opacity.primary[3],
        padding: theme.spacing(1),
        width: '100%',
        '& p': {
            marginTop: 0,
            marginBottom: 0
        },
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
}));


const InfoContactDisplay = (props) => {

    const classes = useStyles();

    const { children, title, infos } = props;

    return (
        <Grid container className={classes.root}>
            <Grid item xs={2} sm={1} className={classes.center}>
                {children}
            </Grid>
            <Grid item xs={9}>
                <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
                <Typography component='span' variant='body1' >{typeof infos === 'object' ? infos.map((e, i) => <p key={`contactUs-info-${i}`}>{e}</p>) : infos}</Typography>
            </Grid>
        </Grid>
    );
};

export default InfoContactDisplay;
