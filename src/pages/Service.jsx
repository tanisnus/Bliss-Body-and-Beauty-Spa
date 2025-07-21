import React from 'react'
import scrub_image from '../images/body-scrub.jpg'
import './Service.css'

export default function Service() {
    return (
        <div className='service-div'>
           
            <img className='scrub-image' src={scrub_image} alt='scrub_image' />
            <div className='scrub-detail-div'>
                <div className='scrub-detail-title-div'> 
                    <h1>Body Scrub</h1>
                </div>
                <div className='scrub-detail-description-div'>

                </div>

            </div>
        </div>
    )
}