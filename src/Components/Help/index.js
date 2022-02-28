
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import makeStyles from '@mui/styles/makeStyles'

import ExternalLink from '../../assets/icons/externalLink'

const useStyles = makeStyles(theme => ({
    helpComponent: {
        [theme.breakpoints.down('sm')]: {

            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 56
        },
    }

}));

export default function Help() {
    const classes = useStyles();
    return (
        <Grid container direction="row" className={classes.helpComponent}>
            <Grid item xs={10}
                sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <Grid container direction="column">
                    <Grid item xs={10} sx={{ paddingLeft: '16px', fontSize: 14 }}>
                        ¿Necesitas ayuda?
                    </Grid>
                    <Grid item xs={10} sx={{ paddingLeft: '16px', fontSize: 12 }}>
                        <Link href="#">Ir a la sección de ayuda</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} sx={{ paddingRight: '19.67px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <ExternalLink sx={{ cursor: 'pointer' }} />
            </Grid>
        </Grid>
    )
}
