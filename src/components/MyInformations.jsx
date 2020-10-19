import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core/';
import informations from '../informations';
import InfoLogo from './InfoLogo';
import TimeLineComponent from './TimeLine';
import { makeStyles } from '@material-ui/core/styles';

import avatar from '../static/images/image_profil_github.jpeg';
import logoTel from '../static/icons/icons8-téléphone-débranché-100.png';
import logoCity from '../static/icons/icons8-marqueur-100.png';
import logoMail from '../static/icons/icons8-message-100.png';
import logoExp from '../static/icons/icons8-valise-100.png';
import logoStudy from '../static/icons/icons8-chapeau-de-diplôme-100.png';
import logoSkils from '../static/icons/icons8-engrenages-100.png';
import logoHobby from '../static/icons/icons8-coeurs-100.png';
import logoLinks from '../static/icons/icons8-lien-100.png';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}))

const MyInformations = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Avatar alt={informations.name} src={avatar} className={classes.large} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3" gutterBottom>{informations.name}</Typography>
        <Typography variant="subtitle1" gutterBottom>{informations.job}</Typography>
        <Typography variant="subtitle1" gutterBottom>{informations.stacks}</Typography>
      </Grid>
      <Grid item xs={4}>
        <InfoLogo text={informations.phone} logo={logoTel} />
        <InfoLogo text={informations.city} logo={logoCity} />
        <InfoLogo text={informations.mail} logo={logoMail} />
      </Grid>
      <Grid item xs={12} style={{ borderBottom: "2px black solid", borderTop: "2px black solid" }}>
        <Typography variant="subtitle1" gutterBottom>{informations.aboutme}</Typography>
      </Grid>
      <Grid item xs={6}>
        <InfoLogo text='Experience' logo={logoExp} />
        <TimeLineComponent list={informations.experience} />
      </Grid>
      <Grid item xs={6}>
        <InfoLogo text='Formation' logo={logoStudy} />
        <TimeLineComponent list={informations.study} />
      </Grid>
      <Grid item xs={6}>
        <InfoLogo text='Competences' logo={logoSkils} />
      </Grid>
      <Grid item xs={6}>
        <InfoLogo text="Centre d'interet" logo={logoHobby} />
      </Grid>
      <Grid item xs={12}>
        <InfoLogo text="Liens utils" logo={logoLinks} />
      </Grid>
    </Grid>
  );
};

export default MyInformations;
