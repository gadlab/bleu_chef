import * as React from 'react'
// IMPORT NODE_MODULES
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
// IMPORT GRAPHICAL ASSETS
import BCLogo from '../assets/logos/bleu-chef-logo-grey60.svg'
import store from '../index'
import { actionSetLanguage } from '../states/actions/actionCreator'

const languageItems = ['Deutsch', 'English', 'Español', 'Français', 'Italiano', 'Português']
const footerMenuItems = ['SignUp', 'Connexion', 'Messenger', 'General Terms', 'Help', 'Settings']
const keyIncrement = 0

const MenuSeparator = () => {
    return ( <span>{' '}&middot;{' '}</span>)
}
const Copyright = () => {
    return (
        <div>
            <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
            {'Copyright © '}
            <Link color="inherit" href="https://bleu-chef.com/">
                Bleu Chef
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
        </div>
    )
}

export default function Footer() {
    const curLanguage = useSelector(state => state.configState.currentLanguage);
    const dispatch = useDispatch();

    const setLanguage = (lang) =>  {
        dispatch (actionSetLanguage(lang))
    }

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            {curLanguage}
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={7}>
                        <Typography variant="body1">
                            {languageItems.map((language) => (
                                <>
                                    <Link 
                                    key={'langKey-' + keyIncrement}
                                    component="button"
                                    underline="hover"
                                    variant="body2"
                                    onClick={() => {
                                        console.info("Go to " + language + " version");
                                        setLanguage(language)
                                    }}
                                >
                                    {language}
                                </Link>
                                <MenuSeparator />
                                </>
                            ))}
                        </Typography>
                        <Typography variant="body1">
                            {footerMenuItems.map((page)=>(
                                <>
                                    <Link 
                                        key={'pageKey-' + keyIncrement}
                                        component="button"
                                        underline="hover"
                                        variant="body2"
                                        onClick={() => {
                                            console.info("Go to " + page + " Page");
                                        }}
                                    >
                                        {page}
                                    </Link>
                                    <MenuSeparator />
                                </>
                            ))}
                        </Typography>
                        <Copyright />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5}>
                        <img src={BCLogo}
                        alt="Bleu Chef"
                        className='logo-footer'
                    />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}