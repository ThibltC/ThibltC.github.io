import { Parallax, Background } from 'react-parallax';
import Section from './SectionGenerator';

import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import InfoContactDisplay from './InfoContactDisplay'

import img from '../static/images/montfuji.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    container: {
        height: 200,
        width: '95vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    list: {
        backdropFilter: 'blur(8px)',
        margin: theme.spacing(3),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        background: 'black',
        opacity: 0.3
    },
    img: {
        filter: 'grayscale(100%) contrast(200%) brightness(30%)',
        objectFit: 'cover',
        width: '1500px'
    }
}));

const ContactMe = () => {

    const theme = useTheme();
    const classes = useStyles();

    const infosList = [
        {
            icon: <PhoneIcon style={{ color: theme.palette.colors.secondary }} />,
            title: 'Téléphone',
            infos: '07.82.63.35.89'
        },
        {
            icon: <EmailIcon style={{ color: theme.palette.colors.secondary }} />,
            title: 'Email',
            infos: 'thibault.chardonnet@outlook.fr'
        },
    ];

    return (
        <Section title='Me contacter' id='contactMe' >
            <Parallax strength={500} >
                <Background>
                    <img src={img} alt='bg-img' className={classes.img} />
                </Background>
                <div className={classes.container}>
                    <div className={classes.list}>
                        {infosList.map((info, index) => (
                            <InfoContactDisplay
                                key={`info-${info.title}-${index}`}
                                title={info.title}
                                infos={info.infos}
                            >
                                {info.icon}
                            </InfoContactDisplay>
                        ))}
                    </div>
                </div>
            </Parallax>
        </Section>
    );
}

export default ContactMe
