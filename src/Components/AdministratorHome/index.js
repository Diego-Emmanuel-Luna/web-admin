import TextField from '@mui/material/TextField'
import { Grid, Button, InputAdornment } from '@mui/material'

import Table from '../Table'
import FilterIcon from '../../assets/icons/filter'
import { SearchIconInput } from '../../assets/icons/search'

export default function AdministratorHome() {

    return (
        <Grid container sx={{ marginTop: '24px' }}>
            <Grid item xs={12} sm={12} md={6} lg={7}>
                <Grid container spacing={1}>
                    <Grid item xs={7} >
                        <TextField
                            id="search"
                            color='tertiary'
                            placeholder="Buscar"
                            FormHelperTextProps={{
                                style: { background: 'purple', color: 'pink' }
                            }}
                            InputProps={{
                                style: { borderRadius: '32px', backgroundColor: '#E8EAF0', color: '#323232', height: '42px' },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIconInput style={{ color: 'blue' }} />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color='tertiary' disableElevation>
                            Buscar
                        </Button>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Button variant="contained" color='secondary' disableElevation>
                            <FilterIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5}>
                <Grid container spacing={1}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="outlined" color='secondary' disableElevation sx={{ color: '#323232' }}>
                            Descargar
                        </Button>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" fullWidth color='secondary' disableElevation sx={{ color: 'white' }}>
                            Agregar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '16px' }}>
                <Table/>
            </Grid>
        </Grid>
    )
}