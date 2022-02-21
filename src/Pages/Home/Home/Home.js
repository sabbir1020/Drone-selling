import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Navigation from '../../Share/Navigation/Navigation';
import ClientReviews from '../ClientReviews/ClientReviews';
import DroneHeader from '../DroneHeader/DroneHeader';
import DroneSales from '../DroneSales/DroneSales';
import Dronesimple from '../Dronesimple/Dronesimple';

const Home = () => {
    return (
        <Box sx={{ bgcolor: '#272727' }}>
        <Navigation></Navigation>
        <DroneHeader></DroneHeader>
        <Dronesimple></Dronesimple>
        <DroneSales></DroneSales>
        <ClientReviews></ClientReviews>
        <Footer></Footer>
        </Box>
    );
};

export default Home;
