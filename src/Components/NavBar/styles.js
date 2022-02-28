
import makeStyles from '@mui/styles/makeStyles';
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
        alignItems: 'center', 
        justifyContent: 'center', 
        display: 'flex'
    },
    divider:{
        border: '1px solid #FFFFFF', 
        opacity: '32%'
    },
    gridItem:{
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        display: 'flex', 
        paddingTop: '16px', 
        paddingBottom: '16px' 
    },
    gridContent:{
        alignItems: 'center', 
        justifyContent: 'center', 
        display: 'flex'
    }
}))

export default useStyles