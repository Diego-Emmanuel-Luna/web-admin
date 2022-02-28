
import makeStyles from '@mui/styles/makeStyles';
const drawerWidth = '267px';
const useStyles = makeStyles(theme => ({
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
            width: '80px',
        },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
            },
            [theme.breakpoints.down('sm')]: {
                width: '80px',
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

}));

export default useStyles