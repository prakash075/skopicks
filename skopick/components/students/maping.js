import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import Students from './index';
import { Data } from '../constants';

const Maping = () => {
    return (
        <>
            <Container sx={{ maxWidth: { xs: '291px', sm: 'sm', md: 'md', lg: 'lg' }, margin: '100px auto' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>

                        <Box sx={{ width: '50px', height: '22px', padding: '2px 4px', textAlign: 'center', boxShadow: '0px 1px 2px rgba(105, 81, 255, 0.05)', borderRadius: '36px', backgroundColor: '#DCFCE7', }}>
                            <Typography sx={{ fontSize: '12px', lineHeight: '18px', fontStyle: 'normal', fontFamily: 'graphik', fontWeight: '500', color: '#22C55E' }}>TEAM</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '32px', lineHeight: '72px', fontStyle: 'normal', fontFamily: 'sentient', fontWeight: '700', color: '#1B1B1B', mb: 2 }}>Why students love Skopick</Typography>
                        </Box>
                    </Grid>
                    {Data.map((value, index) =>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Box key={index}>
                                <Students details={value} />
                            </Box>
                        </Grid>
                    )}

                </Grid>
            </Container>
        </>
    )
}

export default Maping;