import { Parallax, Background } from 'react-parallax';
import Section from './SectionGenerator';

import MuiTypography from '../materialUI/MuiTypography'

import img from '../static/images/montfuji.jpg';


const ContactMe = () => {
    return (
        <Section title='Me contacter' >
            <Parallax  strength={500} >
                <Background>
                    <img src={img} alt='tasoeur' style={{ filter: 'grayscale(100%) contrast(200%) brightness(30%)', objectFit: 'cover', width: '1500px' }}/>
                </Background>
                <div style={{ height: 500, width: '95vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div style={{ backdropFilter: 'blur(8px)', height: '400px', width: '400px', background: 'black', opacity: 0.3}}><MuiTypography>OLM</MuiTypography></div>
                </div>
            </Parallax>
        </Section>
    );
}

export default ContactMe
