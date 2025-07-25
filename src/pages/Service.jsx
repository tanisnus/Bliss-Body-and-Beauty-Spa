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



// Pricing card for 30 mins
  const first_price_card = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 16, fontFamily: 'Poppins'  }}>
        ⏰ 30 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
           $60{bull}
        </Typography>

      </CardContent>


    </React.Fragment>
  );


  // Pricing card for 60 mins
  const second_price_card = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 16, fontFamily: 'Poppins'  }}>
        ⏰ 60 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins'  }}>
           $110{bull}
        </Typography>

      </CardContent>


    </React.Fragment>
  );



  // Pricing card for 90 mins
  const third_price_card = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 16, fontFamily: 'Poppins' }}>
        ⏰ 90 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
           $160{bull}
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
                        <li className='scrub-detail-bulletpoint-list-item'> Unscented Salt Scrub </li>
                        <li className='scrub-detail-bulletpoint-list-item'> Green Tea & Peppermint Salt Scrub</li>
                        <li className='scrub-detail-bulletpoint-list-item'> Unscented Brown sugar scrub </li>
                        <li className='scrub-detail-bulletpoint-list-item'> French Vanilla Latte Organic Brown Sugar Scrub </li>
                        <li className='scrub-detail-bulletpoint-list-item'> Vanilla Orange Brown Sugar Scrub </li>
                    </ul>
                </div>



                <div className='scrub-detail-pricing-div'>
                    <Box sx={{ Width: 200 }}>
                        <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{first_price_card}</Card>
                    </Box>

                    <Box sx={{ Width: 200 }}>
                        {/* <Card variant="outlined"> {second_price_card}</Card> */}
                        <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{second_price_card}</Card>

                    </Box>

                    <Box sx={{ Width: 200 }}>
                        <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{third_price_card}</Card>
                    </Box>
                </div>

            </div>

        </div>





    )
}