import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';

import Drawer from '../../Components/Drawer'
import NavBar from '../../Components/NavBar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#323232',
        },
        secondary: {
            main: '#4FB9BB',
        },
        tertiary:{
            main: '#E8EAF0'
        }
    },
});


export default function Administrators() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavBar />
                <Drawer />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <Grid sx={{ display: 'flex' }}>
                        Content
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
}