import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import './Header.css'

function Header(props) {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [home , setHome] = useState(true)
    const [locations, setLocations] = useState(false)
    const [RSVP, setRSVP] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleAnimations)
    }, [])

    const handleAnimations = () => {
        //TODO: built out scrolling logic here when sizes of components is finished.
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    const scrollToLocations = () => {
        window.scrollTo({
            top: 1000, 
            left: 0, 
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    const scrollToRSVP = () => {
        window.scrollTo({
            top:2000,
            left: 0, 
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    return (
        <div className='master-header-div'>

            <h1>The Chadwick's</h1>

            <nav className='navbar'>

                <ul className='large-screen-nav-list'>
                    <li className={`nav-item ${home ? 'current-nav-location' : null}`}
                        onClick={() => scrollToTop()}>Home</li>
                    <li className={`nav-item ${locations ? 'current-nav-location' : null}`}
                        onClick={() => scrollToLocations()}>Venue Locations</li>
                    <li className={`nav-item ${RSVP ? 'current-nav-location' : null}`}
                        onClick={() => scrollToRSVP()}>RSVP</li>
                    <li className='nav-item'>Our Vows</li>
                </ul>

                <img className='hamburger'
                    alt='menu icon'/>

                <nav className={`mobile-nav-list-closed ${mobileMenu ? `mobile-nav-list-open` : null}`}>
                    <li className='mobile-nav-item'
                        onClick={() => scrollToTop()}>Home</li>
                    <li className='mobile-nav-item'
                        onClick={() => scrollToTop()}>Venue Locations</li>
                    <li className='mobile-nav-item'
                        onClick={() => scrollToTop()}>RSVP</li>
                </nav>

            </nav>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {})(withRouter(Header))
