import React from 'react'
import { Link } from 'react-router-dom';
import Spa_Logo from '../images/Spa_Logo.png'
import './Header.css'

export default function Header() {

    return(
        <>

        <nav className='header-section'> 
            
            <div className='logo-div-top-left'>
                <img className='logo-img' src={Spa_Logo} alt='Spa_Logo' />
            </div>

            <ul className='header-list'>
                <li className='header-list-item'>
                    <Link> Services</Link>
                </li>

                <li className='header-list-item'>
                    <Link> About Us</Link>
                </li>

                <li className='header-list-item'>
                    <Link> Contact</Link>
                </li>

            </ul>

        </nav>

       

        </>
    )
}