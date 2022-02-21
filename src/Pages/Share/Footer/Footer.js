import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import TextField from '@mui/material/TextField';


const Footer = () => {
    return (
      
            <Box sx={{p:5,bgcolor:'#374151'}} > 
                 <Container>
                <Grid container spacing={2}  >
             
                <Grid xs={6} md={3} sx={{color:'white',textAlign:"left"}}>
                    <Typography variant='h5' >
                       INFO
                    </Typography>
                    <Typography variant='subtitle2' >
                      The Eygle's Eye
                    </Typography>
                    <Typography variant='subtitle2' >
                      Better Quality
                    </Typography>
                    <Typography variant='subtitle2' >
                    Best for Photography
                    </Typography>
                </Grid>
                <Grid xs={6} md={3}>
                    <Typography variant='h5'>
                        DRONES
                    </Typography>
                    <Typography variant='subtitle2'>
                         Dji Mavic 3
                    </Typography>
                    <Typography variant='subtitle2'>
                    Ryze Tello
                    </Typography>
                    <Typography variant='subtitle2'>
                    PowerVision
                    </Typography>
                </Grid>
                <Grid xs={6} md={3}>
                    <Typography variant='h5'>
                       LINK 
                    </Typography>
                    <Typography variant='subtitle2'>
                    About
                    </Typography>
                    <Typography variant='subtitle2'>
                       Contact 
                    </Typography>
                    <Typography variant='subtitle2'>
                       Media
                    </Typography>
                </Grid>
                <Grid xs={6} md={3}>
                 
                <TextField id="outlined-basic" style={{bgcolor:'blue'}} variant="outlined" />
                

                    
                </Grid>
            </Grid>
            </Container>
            </Box>
       
    );
};

export default Footer;