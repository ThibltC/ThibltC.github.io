import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { mainTheme } from './themeProvider';

import Header from './components/Header';
import CoverImage from './components/CoverImage';


const App = () => {

    return (
        <ThemeProvider theme={mainTheme}>
            <CoverImage />
            <Header />
        </ThemeProvider>
    );
};

export default App;
