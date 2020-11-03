import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useSizeWindow from '../hooks/useSizeWindow';

import Typography from '../materialUI/MuiTypography';
import Section from './SectionGenerator';

import picture from '../static/images/20200913_184419.jpg';


const useStyles = makeStyles((theme) => {
    const { primary, secondary } = theme.palette.colors;
    return {
        title: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        clipPath: {
            clipPath: 'polygon(0 20%,100% 0, 100% 80%, 0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `linear-gradient(45deg, ${secondary}, ${primary})`,
            width: '100%'
        },
        container: {
            margin: '100px 0',
            padding: `${theme.spacing(4)}px 0`,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'justify',
            maxWidth: '1000px'
        },
        text: {
            margin: `0 ${theme.spacing(3)}px`,
        },
        picture: {
            margin: theme.spacing(3),
            maxWidth: '200px',
            minWidth: '150px',
            boxShadow: `5zpx 5px 20px ${theme.palette.colors.active}`,
        },
        divider: {
            width: '270px'
        }
    };
});


const AboutMe = () => {

    const classes = useStyles();
    const size = useSizeWindow();

    return (
        <Section title='A propos' id='aboutUs'>
            <div className={classes.clipPath}>
                <div className={classes.container} style={size.S ? { flexDirection: 'column', margin: '150px 0' } : {}}>
                    <img src={picture} alt='me' className={classes.picture} style={size.S ? { flexDirection: 'column' } : {}}/>
                    <Typography className={classes.text}>J’ai été formé au développement web au sein de la Wild Code School Paris durant 5 mois intensifs. Commençant par du JavaSript ES6 principalement, je me suis spécialisé en ReactJs / Redux pour le front et nodeJS / mySql pour le back. Outre la programmation, j’ai aussi été formé à l’utilisation de GitHub et à la gestion de projet par méthode agile SCRUM. Toutes ces compétences m’ont permis de travailler sur divers projets, aussi bien professionnels que personnels. Mon seul objectif est de devenir  expert  dans  mon  domaine  et  appréhender  tous  les  aspects  qui  en  découlent.  Je  suis  un  passionné,  et  j’aime  apprendre constamment de nouvelle choses.</Typography>
                </div>
            </div>
        </Section>
    );
};

export default AboutMe;
