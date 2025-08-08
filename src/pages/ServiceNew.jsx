import React from 'react'
import './ServiceNew.css'

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
            <div className='all-services-div'>
                All Services Section
            </div>

        </div>
       
    )

}