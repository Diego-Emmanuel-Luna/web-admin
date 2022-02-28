import { useState } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Link, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Drawer from '../../Components/Drawer'
import NavBar from '../../Components/NavBar'
import Content from '../../Components/Content'
import UsersIcon from '../../assets/icons/users'
import EventsIcon from '../../assets/icons/events'
import LeadersIcon from '../../assets/icons/leaders'
import RewardsIcon from '../../assets/icons/rewards'
import ReportsIcon from '../../assets/icons/reports'
import CompanyIcon from '../../assets/icons/company'
import CoursesIcon from '../../assets/icons/courses'
import CatalogsIcon from '../../assets/icons/catalogs'
import NotificationsIcon from '../../assets/icons/notifications'
import AdministratorIcon from '../../assets/icons/administrators'


import AdministratorHome from '../../Components/AdministratorHome'

const theme = createTheme({
    palette: {
        primary: {
            main: '#323232',
        },
        secondary: {
            main: '#4FB9BB',
        },
        tertiary: {
            main: '#E8EAF0'
        }
    },
});

const menuOptions = [
    {
        key: 'administrators',
        title: 'Administradores',
        homeTitle: 'Administradores de la consola',
        icon: <AdministratorIcon />,
        component: <AdministratorHome />
    },
    {
        key: 'catalogs',
        title: 'Catalogos',
        icon: <CatalogsIcon />
    },
    {
        key: 'leaders',
        title: 'Líderes',
        icon: <LeadersIcon />
    },
    {
        key: 'users',
        title: 'Usuarios',
        icon: <UsersIcon />
    },
    {
        key: 'company',
        title: 'Mi empresa',
        icon: <CompanyIcon />
    },
    {
        key: 'courses',
        title: 'Cursos',
        icon: <CoursesIcon />
    },
    {
        key: 'rewards',
        title: 'Recompensas',
        icon: <RewardsIcon />
    },
    {
        key: 'events',
        title: 'Eventos',
        icon: <EventsIcon />
    },
    {
        key: 'notifications',
        title: 'Notificaciones',
        icon: <NotificationsIcon />
    },
    {
        key: 'reports',
        title: 'Reportes',
        icon: <ReportsIcon />
    }
]


export default function Home() {

    const [section, setSection] = useState(null)

    const breadcrumbs = [
        <Link
            underline="hover"
            key="home"
            color="tertiary"
            sx={{ cursor: 'pointer' }}
            onClick={() => { setSection(null) }}
        >
            Inicio
        </Link>,
        <Typography key="section" color='secondary'>
            {section?.title}
        </Typography>,
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavBar />
                <Drawer menuOptions={menuOptions} setSection={setSection} />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ marginTop: '24px' }}>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Content title={section?.homeTitle}>
                        {section?.component}
                    </Content>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
