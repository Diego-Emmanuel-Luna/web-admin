import * as React from 'react';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Paper  from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import makeStyles  from '@mui/styles/makeStyles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CopyrightIcon from '@mui/icons-material/CopyrightOutlined';

import Logo from '../../assets/img/GLI_Logo.png'
import ExternalLink from '../../assets/icons/externalLink';
import AdministratorIcon from '../../assets/icons/administrators';

// esto va a ir al home
const menuOptions = [
    {
        key: 'administrators',
        title: 'Administradores',
        icon: <AdministratorIcon />
    },
    {
        key: 'catalogs',
        title: 'Catalogos',
        icon: <AdministratorIcon />
    },
    {
        key: 'leaders',
        title: 'Líderes',
        icon: <AdministratorIcon />
    },
    {
        key: 'users',
        title: 'Usuarios',
        icon: <AdministratorIcon />
    },
    {
        key: 'company',
        title: 'Mi empresa',
        icon: <AdministratorIcon color='secondary' />
    },
    {
        key: 'courses',
        title: 'Cursos',
        icon: <AdministratorIcon color='secondary' />
    },
    {
        key: 'rewards',
        title: 'Recompensas',
        icon: <AdministratorIcon color='secondary' />
    },
    {
        key: 'events',
        title: 'Eventos',
        icon: <AdministratorIcon color='secondary' />
    },
    {
        key: 'notifications',
        title: 'Notificaciones',
        icon: <AdministratorIcon color='secondary' />
    },
    {
        key: 'reports',
        title: 'Reportes',
        icon: <AdministratorIcon color='secondary' />
    }
]

const drawerWidth = '267px';

// estos estilos se moveran a styles.js en este componente
const useStyles = makeStyles(theme => (
    {
        img: {
            width: '72px',
            height: '59px',
            marginTop: '22px',
            marginBottom: '20px'
        },
        toolbarImage: {
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth
            },
            [theme.breakpoints.down('sm')]: {
                width: 80,
            },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                [theme.breakpoints.up('sm')]: {
                    width: drawerWidth,
                },
                [theme.breakpoints.down('sm')]: {
                    width: 80,
                },
            }
        },
        listItem: {
            padding: 0,
            margin: 0,
            height: 49
        }
        ,
        listItemText: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
            margin: 0,
            color: theme.palette.primary.main,
            paddingLeft: 13.27
        },
        listItemIcon: {
            [theme.breakpoints.down('sm')]: {
                marginTop: 17.5,
                marginBottom: 17.98,
                display: 'flex',
                justifyContent: 'end'
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: 17.5,
                marginBottom: 17.98,
                paddingLeft: 50.5,
            },
        },

        Copyright: {
            marginTop: 'auto',
        },
        help: {
            [theme.breakpoints.down('sm')]: {
                marginTop: 20,
                marginLeft: 16,
                marginRight: 16,
                marginBottom: 16,

            },
            [theme.breakpoints.up('sm')]: {
                marginTop: 20,
                marginLeft: 16,
                marginRight: 16,
                marginBottom: 16,

            },
            backgroundColor: theme.palette.tertiary.main,
            color: theme.palette.primary.main,

        },
        helpIcon: {
            [theme.breakpoints.down('sm')]: {
                paddingTop: 20,
                paddingBottom: 16,
                display: 'flex',
                justifyContent: 'center'
            },
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },
        },
        helpComponent:{
            [theme.breakpoints.down('sm')]: {
                
                display: 'none'
            },
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                height:56
            },
        }

    }));


export default function PermanentDrawerLeft() {
    const classes = useStyles();
    const Help = () => {
        return (
            <Grid container direction="row" className={classes.helpComponent}>
                <Grid item xs={10} 
                sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <Grid container direction="column">
                        <Grid item xs={10} sx={{ paddingLeft:'16px' ,fontSize: 14 }}>
                            ¿Necesitas ayuda?
                        </Grid>
                        <Grid item xs={10} sx={{ paddingLeft:'16px', fontSize: 12 }}>
                            <Link href="#">Ir a la sección de ayuda</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} sx={{ paddingRight:'19.67px',alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <ExternalLink sx={{ cursor: 'pointer' }} />
                </Grid>
            </Grid>
        )
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar className={classes.toolbarImage}>
                <img
                    src={Logo}
                    alt='GLI Icon'
                    loading="lazy"
                    className={classes.img}
                />
            </Toolbar>
            <Divider />
            {
                menuOptions.map((option, index) => {
                    return (
                        <List className={classes.listItem} key={option.key}>
                            <ListItem className={classes.listItem} button key={option.key}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText className={classes.listItemText} primary={option.title} primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            {index !== menuOptions.length - 1 ? <Divider /> : null}
                        </List>
                    )
                })
            }
            <Grid container className={classes.Copyright}>
                <Grid item xs={12}>
                    <Paper className={classes.help}>
                        <ListItemIcon className={classes.helpIcon}>
                            <ExternalLink />
                        </ListItemIcon>
                        <Help />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <ListItem className={classes.listItem} key='Copyright'>
                        <ListItemIcon className={classes.listItemIcon}>
                            <CopyrightIcon />
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItemText}
                            primary='Copyright GLI 2021'
                            primaryTypographyProps={{ fontSize: '14px' }}
                        />
                    </ListItem>
                </Grid>
            </Grid>
        </Drawer>
    );
}