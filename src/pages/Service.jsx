import React from 'react'
import scrub_image from '../images/body-scrub.jpg'
import body_wraps_image from '../images/body-wrap.jpg'
import massage_image from '../images/massage.jpg'
import './Service.css'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { BodyScrubFirstPriceCard, BodyScrubSecondPriceCard, BodyScrubThirdPriceCard } from '../components/PricingCards';
import { BodyWrapsFirstPriceCard, BodyWrapsSecondPriceCard, BodyWrapsThirdPriceCard } from '../components/PricingCards';

import { PostSurgeryCareFirstPriceCard, PostSurgeryCareSecondPriceCard, PostSurgeryCareThirdPriceCard } from '../components/PricingCards';
import { MassageFirstPriceCard, MassageSecondPriceCard, MassageThirdPriceCard } from '../components/PricingCards';


export default function Service() {
    return (

        // returning div
        <div className='service-div'>
           

        {/* 1st Service Section - Body Scrub */}

        <div className='first-service-div'>
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
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{BodyScrubFirstPriceCard}</Card>
                        </Box>

                        <Box sx={{ Width: 200 }}>
                            {/* <Card variant="outlined"> {second_price_card}</Card> */}
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{BodyScrubSecondPriceCard}</Card>

                        </Box>

                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{BodyScrubThirdPriceCard}</Card>
                        </Box>
                    </div>
                </div>
        </div>

         

        {/* 2nd Service Section - Body Wraps */}
        <div className='second-service-div'>
            <img className='body-wraps-image' src={body_wraps_image} alt='body-wraps-image' />
                <div className='body-wraps-detail-div'>
                    <div className='body-wraps-detail-title-div'> 
                        <h1>Body Wraps</h1>
                    </div>

                    <div className='body-wraps-detail-bulletpoint-div'>
                        <ul className='body-wraps-detail-bulletpoint-list'>
                            <li className='body-wraps-detail-bulletpoint-list-item'> Body Luxe Hydrating Mask</li>
                            <li className='body-wraps-detail-bulletpoint-list-item'> Seaweed Mud Mask</li>
                            <li className='body-wraps-detail-bulletpoint-list-item'> Dead Sea Mud Mask </li>
                            <li className='body-wraps-detail-bulletpoint-list-item'> Firming Mud Mask </li>
                        </ul>
                    </div>


                    <div className='body-wraps-detail-pricing-div'>
                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{BodyWrapsFirstPriceCard}</Card>
                        </Box>

                        <Box sx={{ Width: 200 }}>
                            {/* <Card variant="outlined"> {second_price_card}</Card> */}
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{BodyWrapsSecondPriceCard}</Card>

                        </Box>

                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{BodyWrapsThirdPriceCard}</Card>
                        </Box>
                    </div>
                </div>
        </div>



       {/* 3rd Service Section - Head Spa */}



      {/* 4th Service Section - Post-Surgery Care */}
      <div className='forth-service-div'>
            <img className='post-surgery-care-image' src={scrub_image} alt='post-surgery-care-image' />
                <div className='post-surgery-care-detail-div'>
                    <div className='post-surgery-care-detail-title-div'> 
                        <h1>Post-Surgery-Care</h1>
                    </div>

                    <div className='post-surgery-care-detail-bulletpoint-div'>
                        <ul className='post-surgery-care-detail-bulletpoint-list'>
                            <li className='post-surgery-care-detail-bulletpoint-list-item'> Lymphatic Drainage Massage</li>
                            <li className='post-surgery-care-detail-bulletpoint-list-item'> Cativation Therapy</li>
                            <li className='post-surgery-care-detail-bulletpoint-list-item'> Ultrasound Therapy</li>
                            <li className='post-surgery-care-detail-bulletpoint-list-item'> Red Light Therapy</li>

                        </ul>
                    </div>


                    <div className='post-surgery-care-detail-pricing-div'>
                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{PostSurgeryCareFirstPriceCard}</Card>
                        </Box>

                        <Box sx={{ Width: 200 }}>
                            {/* <Card variant="outlined"> {second_price_card}</Card> */}
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{PostSurgeryCareSecondPriceCard}</Card>

                        </Box>

                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{PostSurgeryCareThirdPriceCard}</Card>
                        </Box>
                    </div>
                </div>
        </div>





        {/* 5th Service Section - Facial */}


        {/* 6th Service Section - Massage */}
        <div className='sixth-service-div'>
            <img className='massage-image' src={massage_image} alt='massage-image' />
                <div className='massage-detail-div'>
                    <div className='massage-detail-title-div'> 
                        <h1>Massage</h1>
                    </div>

                    <div className='massage-detail-bulletpoint-div'>
                        <ul className='massage-detail-bulletpoint-list'>
                            <li className='massage-detail-bulletpoint-list-item'> Swedish</li>
                            <li className='massage-detail-bulletpoint-list-item'> Deep Tissue </li>
                            <li className='massage-detail-bulletpoint-list-item'> Thai Signature </li>
                            <li className='massage-detail-bulletpoint-list-item'> Pregnancy </li>
                            <li className='massage-detail-bulletpoint-list-item'> Sport Massage </li>
                            <li className='massage-detail-bulletpoint-list-item'> Add ons: </li>
                            <li className='massage-detail-bulletpoint-list-item add-on-item'> Hot Stone $35 </li>
                            <li className='massage-detail-bulletpoint-list-item add-on-item'> CBD Oil $35 </li>
                            <li className='massage-detail-bulletpoint-list-item add-on-item'> Back Scrub $35 </li>






                        </ul>
                    </div>


                    <div className='massage-detail-pricing-div'>
                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{MassageFirstPriceCard}</Card>
                        </Box>

                        <Box sx={{ Width: 200 }}>
                            {/* <Card variant="outlined"> {second_price_card}</Card> */}
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{MassageSecondPriceCard}</Card>

                        </Box>

                        <Box sx={{ Width: 200 }}>
                            <Card variant="outlined" sx={{ backgroundColor: '#FDECEF', borderRadius: 5 }}>{MassageThirdPriceCard}</Card>
                        </Box>
                    </div>
                </div>
        </div>





        {/* returning div */}
        </div>





    )
}