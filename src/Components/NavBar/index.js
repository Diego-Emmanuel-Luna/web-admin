
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
const drawerWidth = 240;
export default function NavBar() {

    return (
        <AppBar
            position="fixed"
            color='secondary'
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>

            </Toolbar>
        </AppBar>

    )
}