import { makeStyles } from '@material-ui/core/styles';

import { Fade } from '@material-ui/core';

import useSizeWindow from '../hooks/useSizeWindow';
import HeaderImage from '../static/images/main.jpg';

import Parallax from './ParallaxGenerator';
import Typography from '../materialUI/MuiTypography';

const useStyles = makeStyles(() => {
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
    const size = useSizeWindow();

    return (
        <Parallax src={HeaderImage} multiplyOffset={size.S ? 0 : 50}>
            <div className={classes.center}>
                <Typography variant='h1' color="textPrimary" style={{ textAlign: 'center' }}>{'Thibault Chardonnet'}</Typography>
                <Fade in={true} timeout={4000}>
                    <Typography variant='h2'>Développeur Javascript React / NodeJs</Typography>
                </Fade>
            </div>
        </Parallax>
    );
};

export default CoverImage;
