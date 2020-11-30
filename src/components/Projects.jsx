import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Section from './SectionGenerator';
import Project from './Project';

import imgProjet1 from '../static/images/donutsmovies.jpg'
import imgProjet2 from '../static/images/image_indisponible.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
    },
}));

const Projects = () => {

    const classes = useStyles();

    return (
        <Section title='Projets' id='projects'>
            <div className={classes.root}>
                <Project src={imgProjet1} title='Donuts Movies' url='https://donutsmovies.herokuapp.com'/>
         //       <Project src={imgProjet2} title='My Frenchy Conciergerie' url=''/>
            </div>
        </Section>
    );
};

export default Projects;
