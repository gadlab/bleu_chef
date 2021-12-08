import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainNavBar from './MainNavBar';
import SignInSide from './SignInSide';
import StickyFooter from './StickyFooter';

import './page.css';

const BCtheme = createTheme({
    palette: {
        primary: {
            light: '#0d47a1',
            main: '#5472d3',
            dark: '#002171',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b5ffff',
            main: '#80d8ff',
            dark: '#49a7cc',
            contrastText: '#000',
        },
    },
});

export default function PageBody() {
    return (
        <ThemeProvider theme={BCtheme}>
            <>
                <Container component="main" maxWidth="xs">
                    <MainNavBar />
                    <SignInSide />
                    <StickyFooter />
                </Container>
            </>
        </ThemeProvider>
    );
}