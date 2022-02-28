import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import { Logout } from '@mui/icons-material'
import { SearchIcon } from '../../assets/icons/search'
import { IconButton, Divider, Tooltip, Avatar, Typography } from '@mui/material'

import useStyles from './styles'

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            color='secondary'
            className={classes.navBar}
        >
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={6} sm={5} md={8} xl={9} className={classes.gridItem}>
                    <IconButton size="large" aria-label="search"  >
                        <SearchIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem className={classes.divider} />
                </Grid>
                <Grid item xs={6} sm={7} md={4} xl={3} className={classes.gridItem}>
                    <Grid item xs={6} sm={3} className={classes.gridContent}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Diego" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Grid>
                    <Grid item sm={7} className={classes.userName}>
                        <Grid container >
                            <Grid item xs={12} className={classes.gridContent}>
                                <Typography>
                                    Diego Luna
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.gridContent}>
                                <Typography>
                                    Desarrollador de software
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={2} className={classes.gridContent} >
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
