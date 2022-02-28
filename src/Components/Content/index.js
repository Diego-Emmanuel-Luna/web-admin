import { Grid,  Typography } from '@mui/material';

export default function Content({ title = "", children }) {
    return (
        <Grid container sx={{ display: 'flex' }}>
            <Grid item xs={12}>
                <Typography color="primary" fontSize='20px'>
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}