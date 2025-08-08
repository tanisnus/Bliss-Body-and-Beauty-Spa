import React from 'react'
import './ServiceNew.css'


import scrub_image from '../images/body-scrub.jpg'
import body_wraps_image from '../images/body-wrap.jpg'
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

                <div className='services-row'>
                row 1
                    <div className='service-card'>
                        <img src={scrub_image}></img>
                        <h3> Body Scrub</h3>
                        <p> Description</p>
                    </div>


                    <div className='service-card'>
                        <img></img>
                        <h3> Service 2</h3>
                        <p> Description</p>
                    </div>


                    <div className='service-card'>
                        <img></img> 
                        <h3> Service 3</h3>
                        <p> Description</p>

                    </div>   
                </div>

                <div className='services-row'>
                    row 2
                    <div className='service-card'>
                        <img ></img>
                        <h3> Service 4</h3>
                        <p> Description</p>
                    </div>


                    <div className='service-card'>
                        <img></img>
                        <h3> Service 5</h3>
                        <p> Description</p>
                    </div>


                    <div className='service-card'>
                        <img></img> 
                        <h3> Service 6</h3>
                        <p> Description</p>

                    </div>   
                </div>


            </div>

        </div>
       
    )

}