import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BCMainMenu from './components/BCMainMenu';
import BCSignIn from './components/BCSignIn';
import BCFooter from './components/BCFooter';

import './App.css';

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

const PageBody = () => {
    return (
      <>
        <CssBaseline />
        <ThemeProvider theme={BCtheme}>
          <BCMainMenu />
          <Container component="main" maxWidth="lg">
            <BCSignIn />
          </Container>
          <BCFooter />
        </ThemeProvider>
      </>
    )
}
export default PageBody
