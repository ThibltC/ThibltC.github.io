import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HeaderImage from '../static/images/main.jpg';

import Parallax from './ParallaxGenerator';
import Typography from './MuiTypography';

const useStyles = makeStyles((theme) => {
    return {
        center: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    };
});


const CoverImage = () => {

    const classes = useStyles();


    return (
        <Parallax src={HeaderImage}>
            <div className={classes.center}>
                <Typography variant='h1'>Thibault Chardonnet</Typography>
                <Typography variant='h2'>Développeur Javascript React / NodeJs</Typography>
            </div>
        </Parallax>
    );
};

export default CoverImage;
