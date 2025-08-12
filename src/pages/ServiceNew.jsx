import React from 'react'
import './ServiceNew.css'


import scrub_image from '../images/body-scrub.jpg'
import body_wraps_image from '../images/body-wrap.jpg'
import head_spa_image from '../images/head-spa.jpg'

import post_surgery_image from '../images/post-surgery.jpg'
import facial_image from '../images/facial.jpg'
import massage_image from '../images/massage.jpg'


import spaLogo from '../images/Spa_Logo.png'

export default function Service() {
    return (

        // React Placeholder div
        <div className='react-returning-div'>




            {/* Intro Section */}
            <div className='intro-div'>

                {/* Image */}
                <div className='image-div'>
                    <img className='image' src={spaLogo} alt="Brand Image"/>
                </div>

                {/* Text */}
                <div className='text-div'>
                    <h1 className='text-header'>
                        Welcome!
                    </h1>
                    <p className='text-body'>
                        At our wellness studio, we offer high-quality body care treatments like natural scrubs, hydrating wraps, and post-surgery therapies such as lymphatic drainage and red light therapy—to help you feel refreshed, relaxed, and restored.                
                    </p>
                </div>


            </div>



            {/* All Services Section */}
            <div className='services-grid'>

                {/* Row 1 */}
                <div className='services-row'>

                    
                    <div className='service-card'>
                        <img src={scrub_image} alt="Body Scrub" loading="lazy"></img>
                        <h3> Body Scrub</h3>
                    </div>


                    <div className='service-card'>
                        <img src={body_wraps_image} alt="Body Wraps" loading="lazy"></img>
                        <h3> Body Wraps</h3>
                    </div>


                    <div className='service-card'>
                        <img src={head_spa_image} alt="Head Spa" loading="lazy"></img> 
                        <h3> Head Spa</h3>
                    </div>   

                </div>



                {/* Row 2 */}
                <div className='services-row'>

                    <div className='service-card'>
                        <img src={post_surgery_image} alt="Post-Surgery Care" loading="lazy"></img>
                        <h3> Post-Surgery Care</h3>
                    </div>

                    <div className='service-card'>
                        <img src={facial_image} alt="Facial" loading="lazy"></img>
                        <h3> Facial</h3>
                    </div>

                    <div className='service-card'>
                        <img src={massage_image} alt="Massage" loading="lazy"></img> 
                        <h3> Massage</h3>
                    </div>   


                </div>


            </div>

        </div>
       
    )

}