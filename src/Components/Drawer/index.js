import * as React from 'react'

import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CopyrightIcon from '@mui/icons-material/CopyrightOutlined'

import Logo from '../../assets/img/GLI_Logo.png'
import ExternalLink from '../../assets/icons/externalLink'

import Help from '../Help'
import useStyles from './styles'

export default function PermanentDrawerLeft({ menuOptions = [], setSection }) {
    const classes = useStyles();
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
                            <ListItem
                                className={classes.listItem}
                                button key={option.key}
                                onClick={() => { setSection(option) }}
                            >
                                <ListItemIcon className={classes.listItemIcon}>
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={option.title}
                                    primaryTypographyProps={{ fontSize: '14px' }}
                                />
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