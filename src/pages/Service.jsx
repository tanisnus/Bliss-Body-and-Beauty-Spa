import React from 'react'
import scrub_image from '../images/body-scrub.jpg'
import './Service.css'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';




const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        
    </Box>
);
  
  const card = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h5" component="div" sx={{ mb: 5 }}>
        ⏰ 30 mins
        </Typography>
        
        <Typography variant="h5" component="div">
           $60{bull}
        </Typography>

      </CardContent>


    </React.Fragment>
  );

export default function Service() {
    return (
        <div className='service-div'>
           
            <img className='scrub-image' src={scrub_image} alt='scrub_image' />
            <div className='scrub-detail-div'>
                <div className='scrub-detail-title-div'> 
                    <h1>Body Scrub</h1>
                </div>

                <div className='scrub-detail-bulletpoint-div'>
                    <ul className='scrub-detail-bulletpoint-list'>
                        <li> Unscented Salt Scrub </li>
                        <li> Green Tea & Peppermint Salt Scrub</li>
                        <li> Unscented Brown sugar scrub </li>
                        <li> French Vanilla Latte Organic Brown Sugar Scrub </li>
                        <li> Vanilla Orange Brown Sugar Scrub </li>
                    </ul>
                </div>



                <div className='scrub-detail-pricing-div'>
                    <Box sx={{ Width: 200 }}>
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </div>

            </div>
        </div>
    )
}