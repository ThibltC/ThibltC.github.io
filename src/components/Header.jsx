import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import pdfCV from '../static/CV_TC_250920.pdf';

import Typography from './MuiTypography';


const useStyles = makeStyles((theme) => {
    const primary = theme.palette.colors.primary;
    const secondary = theme.palette.colors.secondary;
    return {
        header: {
            position: 'fixed',
            top: 0,
            height: '140px',
            width: '100%',
            transform: 'skewY(45deg)',
            transformOrigin: 'top right',
            backgroundImage: `linear-gradient(${primary}, ${secondary})`,
            transitionProperty: 'height, transform',
            transitionDuration: '0.5s',
            // boxShadow: `10px 10px 20px ${theme.palette.colors.active}`,
            '& .menuItems': {
                position: 'absolute',
                top: -1000,
                right: 10,
                transform: 'skewY(-10deg)',
                transitionProperty: 'top',
                transitionDuration: '0.5s',
            },
            '&:hover': {
                height: '160px',
                transform: 'skewY(10deg)',
                '& .menuItems': {
                    display: 'block',
                    top: 50
                }
            },
        },
        // headerOpen: {
        //     position: 'absolute',
        //     top: 0,
        //     width: '100%',
        //     transformOrigin: 'top right',
        //     backgroundImage: `linear-gradient(90deg, ${primary}, ${secondary})`,
        //     boxShadow: `2px 2px 15px black`,
        //     height: '200px',
        //     transform: 'skewY(10deg)',
        // },
        items: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: theme.spacing(2)
        },
        link: {
            '&:hover': {
                cursor: 'pointer',
                color: theme.palette.colors.active
            }
        },
        a: {
            color: theme.palette.colors.white,
            '&:hover': {
                cursor: 'pointer',
                color: theme.palette.colors.active
            }
        }
    };
});


const Header = () => {

    const classes = useStyles();


    return (
        <div className={classes.header}>
            <div className='menuItems' >
                <div className={classes.items}>
                    <Typography className={classes.link}>A propos</Typography>
                    <Typography className={classes.link}>Projets</Typography>
                    <Typography className={classes.link}>Me contacter</Typography>
                    <Typography className={classes.link}>
                        <a className={classes.a} href={pdfCV} download="CV_CHARDONNET.pdf">CV</a>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Header;
