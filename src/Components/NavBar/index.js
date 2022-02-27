
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import SearchIcon from '../../assets/icons/search';
import { IconButton, Divider, Tooltip, Avatar, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import { Logout } from '@mui/icons-material';
const drawerWidth = '267';
const useStyles = makeStyles(theme => ({
    navBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - 80px)`
        },
        height: '80px'
    },
    userName: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}))
export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            color='secondary'
            className={classes.navBar}
        >
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={6} sm={5} md={8} xl={9}
                    sx={{ alignItems: 'center', justifyContent: 'flex-end', display: 'flex', paddingTop: '16px', paddingBottom: '16px' }}
                >
                    <IconButton size="large" aria-label="search"  >
                        <SearchIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem sx={{ border: '1px solid #FFFFFF', opacity: '32%' }} />
                </Grid>

                <Grid item xs={6} sm={7} md={4} xl={3}
                    sx={{ alignItems: 'center', justifyContent: 'flex-end', display: 'flex', paddingTop: '16px', paddingBottom: '16px' }}
                >

                    <Grid item xs={6} sm={3} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>

                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Grid>
                    <Grid item sm={7}
                        sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', }}
                        className={classes.userName}
                    >
                        <Grid container >
                            <Grid item xs={12} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <Typography>
                                    Diego Luna
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <Typography>
                                    Desarrollador de software
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={2}
                        sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
                    >
                        <Tooltip title="Cerrar sesión">
                            <IconButton size="large" aria-label="search" color="inherit" >
                                <Logout />
                            </IconButton>

                        </Tooltip>

                    </Grid>

                </Grid>
            </Grid>
        </AppBar>

    )
}
