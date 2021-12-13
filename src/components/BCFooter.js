import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => {
    return (
        <div>
            <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://bleu-chef.com/">
                Bleu Chef
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </div>
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
            <Container maxWidth="sm">
                <Typography variant="body1">
                    My sticky footer can be found here.
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}