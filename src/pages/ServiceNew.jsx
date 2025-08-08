import React from 'react'
import './ServiceNew.css'


import scrub_image from '../images/body-scrub.jpg'
import body_wraps_image from '../images/body-wrap.jpg'


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
                        <img src={scrub_image}></img>
                        <h3> Body Scrub</h3>
                    </div>


                    <div className='service-card'>
                        <img src={body_wraps_image}></img>
                        <h3> Body Wraps</h3>
                    </div>


                    <div className='service-card'>
                        <img></img> 
                        <h3> Head Spa</h3>
                    </div>   

                </div>



                {/* Row 2 */}
                <div className='services-row'>

                    <div className='service-card'>
                        <img ></img>
                        <h3> Post-Surgery Care</h3>
                    </div>

                    <div className='service-card'>
                        <img src={facial_image}></img>
                        <h3> Facial</h3>
                    </div>

                    <div className='service-card'>
                        <img src={massage_image}></img> 
                        <h3> Massage</h3>
                    </div>   


                </div>


            </div>

        </div>
       
    )

}