import * as React from 'react'
// IMPORT NODES_MODULES
import { CssBaseline, Container } from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
// IMPORT COMPONENTS
import MainNav from './components/MainNav'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
// IMPORT CSS
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
          <MainNav />
          <Container component="main" maxWidth="lg">
            <SignIn />
          </Container>
          <Footer />
        </ThemeProvider>
      </>
    )
}
export default PageBody
