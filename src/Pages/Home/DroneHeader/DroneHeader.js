import { Button, Container, Grid, Typography, } from '@mui/material';
import React from 'react';
import headerImg from '../../../images/header.jpg'

const DroneHeader = () => {
    return (
        <Container sx={{bgcolor:'#1F2937'}} >
            <Grid container spacing={2} sx={{m:2}}>
                <Grid  xs={12} md={6} sx={{ textAlign:'left'}} >
                    <Typography variant='h3'sx={{m:3,color:'#F3F4F6'}} >
                    DRONE THAT <br/>
                    CHANGES THE GAME
                    </Typography>
                    <Typography variant='h5'sx={{m:3,color:'#F3F4F6'}} >
                    Best for photography and get mindblowing travel experience form our drones. we are currently running some research.
                    </Typography>
                    <Button sx={{bgcolor:'#4338CA', m:3, color:'#F3F4F6'}} variant="contained">Explore Today</Button>

                </Grid>
                <Grid xs={12} md={6} >
                    <img style={{ height:400}} src={headerImg} alt="headerimg"  ></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DroneHeader;