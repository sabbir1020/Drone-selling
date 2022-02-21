import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import { Button, Container, Typography } from '@mui/material';

const Dronesimple = () => {
    return (
       <Container>
           <Box
      sx={{
        display: 'flex',
        
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 200,
          bgcolor:"#272727",
         marginTop:8,
         textAlign:'left'
        },
      }}
    >
      
      <Paper elevation={3}  >
          <Typography style={{color:'#F3F4F6'}}>The Eagle View </Typography>
          <Typography style={{color:'#F3F4F6'}} >
          Get the perfect view that can not be seen from the ground! Now you can make Drone Photography special. You can get an incredible cinematic video for any needs to start your journey.
          </Typography>
          <Button variant="contained" sx={{bgcolor:"#6D28D9"}}>Explore more</Button>
          </Paper> 
      <Paper elevation={3}> 
          <Typography style={{color:'#F3F4F6'}} >4K Quality </Typography>
    
        <Typography style={{color:'#F3F4F6'}} >
        Well create your perfect promo by providing the best quality video(4k) and professional drone videographers.travel, blog, advertisement, busines, almost everything is possible!
            </Typography>      
            <Button variant="contained" sx={{bgcolor:"#6D28D9"}}>Explore more</Button>

      </Paper> 
      <Paper elevation={3}> 
       <Typography style={{color:'#F3F4F6'}} >
           Best Photography
       </Typography>
       <Typography style={{color:'#F3F4F6'}}>
        Well create your perfect promo by providing the best quality video(4k) and professional drone videographers.travel, blog, advertisement, busines, almost everything is possible!
            </Typography>
       <Button variant="contained"  >Explore more</Button>

      </Paper> 
    </Box>
       </Container>
    );
};

export default Dronesimple;