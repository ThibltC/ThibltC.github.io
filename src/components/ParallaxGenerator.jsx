import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    parallax: {
        position: 'absolute',
        filter: 'brightness(40%) contrast(160%)',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
    },
}));


const ParallaxGenerator = (props) => {

    const { src, multiplyOffset = 50, heightImg = 100, children = <div /> } = props;

    const classes = useStyles();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset)
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={classes.root} style={{ height: `${heightImg}vh` }}>
            <img
                src={src}
                alt='mainPicture'
                className={classes.parallax}
                style={{
                    transform: `translateY(${offset * multiplyOffset / 100}px)`,
                }}
            />
            {children}
        </div>
    )
};

export default ParallaxGenerator;
