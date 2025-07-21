import React from 'react'
import scrub_image from '../images/body-scrub.jpg'
import './Service.css'
import PricingTable from 'react-pricing-table';


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
                </div>

            </div>
        </div>
    )
}