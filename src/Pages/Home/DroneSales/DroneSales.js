import { Container, Grid } from '@mui/material';
import React from 'react';
import DroneSale from '../Dronesale/DroneSale';

const sales = [
    {   id:'1', 
        name:'DJI Mavic 3',
        descrisition:'DJI Mavic 3 is a powerful flagship camera drone equipped with a 4/3 CMOS Hasselblad camera to facili',
        img:'https://i.ibb.co/0FH7QB7/dron1.png',
        price:'$599'
    },
  
    {   id:'2', 
        name:'DJI Mavic 2 Air',
        descrisition:'Mavic Air 2 takes power and portability to the next level, offering advanced features in a compact f',
        img:"https://i.ibb.co/XsHMMQB/dron2.png",
        price:'$599'
    },
  
    {   id:'3', 
        name:'Phantom 4 Pro',
        descrisition:'Draw is a brand new technology for waypoint control. Simply draw a route on screen and the Phantom 4',
        img:'https://i.ibb.co/pfjXBcF/dron3.png',
        price:'$799'
    },
  
    {   id:'4', 
        name:'DJI Mavic 2 zoom',
        descrisition:'Like the Mavic 2 Pro, the Mavic 2 Zoom landed back in August 2018, which means its largely been suc',
        img:'https://i.ibb.co/BjwwG6k/dron4.png',
        price:'$399'
    },
  
    {   id:'5', 
        name:'Ryze Tello',
        descrisition:'We set out to build the most fun drone ever, and we came up with Tello an impressive little drone fo',
        img:"https://i.ibb.co/YchH3x6/dron5.png",
        price:'$723'
    },
  
    {   id:'6', 
        name:'Power Eye',
        descrisition:'The PowerEgg X features strong face recognition capabilities. Its face recognition accuracy is conti',
        img:"https://i.ibb.co/pfjXBcF/dron3.png",
        price:'299'
    } 
  
]


const DroneSales = () => {
    return (
         <Container>
          <h2 style={{color:'#2563EB'}} >Our Top Sales </h2>
          <p style={{color:'#F3F4F6'}} >Get the letest products for better quality and growing business</p>
          <Grid container spacing={2}>
              {
                  sales.map(sale =><DroneSale
                   key={sale.id}
                   sale= {sale}
                  ></DroneSale>)
              }
          </Grid>
        </Container>
    );
};

export default DroneSales;