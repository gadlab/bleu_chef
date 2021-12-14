import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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

const MenuSeparator = () => {
    return (
        <>
            {' '}&middot;{' '}
        </>
    )
}

export default function BCFooter() {
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
            <Container maxWidth="lg">
                <Typography variant="body1">
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to Deutsch version");
                        }}
                    >
                            Deutsch
                    </Link>
                    <MenuSeparator />
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to English version");
                        }}
                    >
                        English
                    </Link>
                    <MenuSeparator />
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to Español version");
                        }}
                    >
                        Español
                    </Link>
                    <MenuSeparator /> 
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to English version");
                        }}
                    >
                        Français
                    </Link>
                    <MenuSeparator /> 
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to Italiano version");
                        }}
                    >
                        Italiano
                    </Link>
                    <MenuSeparator /> 
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to Português version");
                        }}
                    >
                        Português
                    </Link> 
                </Typography>
                <Typography variant="body1">
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to SignUp Page");
                        }}
                    >
                        SignUp
                    </Link>
                    <MenuSeparator />
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to SignIn Page");
                        }}
                    >
                        SignIn
                    </Link>
                    <MenuSeparator />
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Open Messenger");
                        }}
                    >
                        Messenger
                    </Link>
                    <MenuSeparator /> 
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to General Terms Page");
                        }}
                    >
                        General terms
                    </Link>
                    <MenuSeparator /> 
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to Help page");
                        }}
                    >
                        Help
                    </Link>
                    <MenuSeparator />
                    <Link 
                        component="button"
                        underline="hover"
                        variant="body2"
                        onClick={() => {
                            console.info("Go to Settings Page");
                        }}
                    >
                        Settings
                    </Link> 
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}