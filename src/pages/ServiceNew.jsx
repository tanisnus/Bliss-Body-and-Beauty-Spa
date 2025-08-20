import React, { useState } from 'react'
import './ServiceNew.css'


import scrub_image from '../images/body-scrub.jpg'


import body_wraps_image from '../images/body-wrap.jpg'
import wood_therapy_image from '../images/wood-therapy.jpg'
// import head_spa_image from '../images/head-spa.jpg'

import post_surgery_image from '../images/post-surgery.jpg'
import facial_image from '../images/facial.jpg'


import spaLogo from '../images/Spa_Logo.png'

export default function Service() {

    const [expandedService, setExpandedService] = useState(null);

    const toggleService = (serviceId) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

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

                    {/* 1st Service - Body Scrub */}

                    <div className='service-card'>
                        <img src={scrub_image} alt="Body Scrub" loading="lazy"></img>
                        <h3> Body Scrub</h3>
                        <button className='learn-more-btn' onClick={() => toggleService('body-scrub')}>
                            {expandedService === 'body-scrub' ? 'Read Less' : 'Learn More'}
                        </button>
                        {expandedService === 'body-scrub' && (
                            <div className='service-details'>
                                <button className='close-details-btn' onClick={() => toggleService('body-scrub')}>×</button>
                                <div className='detail-item'>
                                    <h4>Description</h4>
                                    <p>Our signature body scrub uses natural exfoliants to remove dead skin cells and reveal your natural glow. Perfect for all skin types.</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Duration</h4>
                                    <p>60 minutes</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Price</h4>
                                    <p>$85</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Benefits</h4>
                                    <ul>
                                        <li>Removes dead skin cells</li>
                                        <li>Improves skin texture</li>
                                        <li>Stimulates circulation</li>
                                        <li>Leaves skin soft and smooth</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>



                    {/* 2nd Service - Body Wraps */}

                    <div className='service-card'>
                        <img src={body_wraps_image} alt="Body Wraps" loading="lazy"></img>
                        <h3> Body Wraps</h3>
                        <button className='learn-more-btn' onClick={() => toggleService('body-wraps')}>
                            {expandedService === 'body-wraps' ? 'Read Less' : 'Learn More'}
                        </button>
                        {expandedService === 'body-wraps' && (
                            <div className='service-details'>
                                <button className='close-details-btn' onClick={() => toggleService('body-wraps')}>×</button>
                                <div className='detail-item'>
                                    <h4>Description</h4>
                                    <p>Hydrating body wraps that deeply moisturize and nourish your skin. Our wraps use premium ingredients to restore moisture and elasticity.</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Duration</h4>
                                    <p>90 minutes</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Price</h4>
                                    <p>$120</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Benefits</h4>
                                    <ul>
                                        <li>Deep hydration</li>
                                        <li>Improves skin elasticity</li>
                                        <li>Detoxifies the body</li>
                                        <li>Relieves muscle tension</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>


                    {/* 3rd Service - Body Sculpting */}
                    
                    <div className='service-card'>
                        <img src={wood_therapy_image} alt="Body Sculpting" loading="lazy"></img> 
                        <h3> Wood Therapy</h3>
                        <button className='learn-more-btn' onClick={() => toggleService('body-sculpting')}>
                            {expandedService === 'body-sculpting' ? 'Read Less' : 'Learn More'}
                        </button>
                        {expandedService === 'body-sculpting' && (
                            <div className='service-details'>
                                <button className='close-details-btn' onClick={() => toggleService('body-sculpting')}>×</button>
                                <div className='detail-item'>
                                    <h4>Description</h4>
                                    <p>Wood therapy is a specialized massage technique that uses sculpted wooden tools to help contour your body, stimulate circulation, and smooth the skin — offering a natural, relaxing approach to body sculpting.</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Duration</h4>
                                    <p>75 minutes</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Price</h4>
                                    <p>$95</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Benefits</h4>
                                    <ul>
                                        <li>Naturally contour and shape your body</li>
                                        <li>Stimulate blood and lymphatic circulation</li>
                                        <li>Reduce the look of cellulite</li>
                                        <li>Relieve muscle tension and promote relaxation</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>   



                </div>
                {/* End of Row 1 */}


                {/* Row 2 */}
                <div className='services-row'>

                    <div className='service-card'>
                        <img src={post_surgery_image} alt="Post-Surgery Care" loading="lazy"></img>
                        <h3> Post-Surgery Care</h3>
                        <button className='learn-more-btn' onClick={() => toggleService('post-surgery')}>
                            {expandedService === 'post-surgery' ? 'Read Less' : 'Learn More'}
                        </button>
                        {expandedService === 'post-surgery' && (
                            <div className='service-details'>
                                <button className='close-details-btn' onClick={() => toggleService('post-surgery')}>×</button>
                                <div className='detail-item'>
                                    <h4>Description</h4>
                                    <p>Specialized treatments including lymphatic drainage and red light therapy to support recovery and healing after surgical procedures.</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Duration</h4>
                                    <p>120 minutes</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Price</h4>
                                    <p>$150</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Benefits</h4>
                                    <ul>
                                        <li>Reduces swelling and inflammation</li>
                                        <li>Accelerates healing process</li>
                                        <li>Improves circulation</li>
                                        <li>Reduces scar tissue formation</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='service-card'>
                        <img src={facial_image} alt="Facial" loading="lazy"></img>
                        <h3> Facial</h3>
                        <button className='learn-more-btn' onClick={() => toggleService('facial')}>
                            {expandedService === 'facial' ? 'Read Less' : 'Learn More'}
                        </button>
                        {expandedService === 'facial' && (
                            <div className='service-details'>
                                <button className='close-details-btn' onClick={() => toggleService('facial')}>×</button>
                                <div className='detail-item'>
                                    <h4>Description</h4>
                                    <p>Customized facial treatments that cleanse, exfoliate, and nourish your skin to promote clear, well-hydrated skin.</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Duration</h4>
                                    <p>75 minutes</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Price</h4>
                                    <p>$95</p>
                                </div>
                                <div className='detail-item'>
                                    <h4>Benefits</h4>
                                    <ul>
                                        <li>Deep cleansing and exfoliation</li>
                                        <li>Improves skin texture and tone</li>
                                        <li>Reduces fine lines and wrinkles</li>
                                        <li>Promotes collagen production</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                </div>


            </div>

        </div>
       
    )

}