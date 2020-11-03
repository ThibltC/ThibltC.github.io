import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '../materialUI/MuiTypography';

import divider from '../static/images/2461548-e09200.svg';

const useStyles = makeStyles((theme) => {
    return {
        title: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // padding: theme.spacing(4),
        },
        divider: {
            width: '270px',
        }
    };
});


const SectionGenerator = (props) => {

    const { title, children, id } = props;

    const classes = useStyles();


    return (
        <section className={classes.title} id={id}>
            <img src={divider} alt='divider' className={classes.divider} />
            <Typography variant='h3' >{title}</Typography>
            {children}
        </section>
    );
};

export default SectionGenerator;
