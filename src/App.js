import { ThemeProvider } from '@material-ui/core/styles';

import { mainTheme } from './themeProvider';

import Header from './components/Header';
import CoverImage from './components/CoverImage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


const App = () => {

    return (
        <ThemeProvider theme={mainTheme}>
            <CoverImage />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Header />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
