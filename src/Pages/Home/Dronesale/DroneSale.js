import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

const DroneSale = ({sale}) => {
 
    const {name,price,descrisition,img} = sale;
    return (
      <Grid xs={12} md={4}  >
       <Card  sx={{ maxWidth: 345, m:2, bgcolor:'#272727' }}>
      <CardMedia
        
        component="img"
        height="300"
        image={img}
        alt="green iguana"
      />
      <CardContent style={{textAlign:'left'}} >
        <Typography gutterBottom variant="h5" color="#F3F4F6" component="div">
         {name}
        </Typography>
        <Typography variant="body1" color="#F3F4F6">
        {descrisition}
        </Typography>
        <Typography style={{ color:'#1D4ED8' }} >
           Price: {price}
        </Typography>
      </CardContent>
      <CardActions  style={{textAlign:"center"}} >
       
        <Button variant='contained' >Buy Now</Button>
      </CardActions>
    </Card>
      </Grid>
    );
};

export default DroneSale;