import React, { useEffect, useState } from 'react'
import axios from 'axios'
import menu from '../icons/60-hamburger-white copy.png'
import Login from '../Login/Login'
import { connect } from 'react-redux'
import { logoutUser } from '../../ducks/userReducer'
import { withRouter } from 'react-router-dom'
import Home from '../icons/icons8-home-50-white copy.png'
import gift from '../icons/icons8-gift-50.png'
import loginIcon from '../icons/icons8-login-rounded-64-white copy.png'
import powerDown from '../icons/icons8-shutdown-64-white.png'
import ring from '../icons/icons8-diamond-ring-64.png'
import brideAndGroom from '../icons/icons8-wedding-50 copy.png'
import rsvpIcon from '../icons/icons8-message-exchange-50 copy.png'
import profileIcon from '../icons/icons8-user-60 copy.png'

import './Header.css'

const arch = 'https://www.myiconstory.com/wp-content/uploads/2018/07/Moab-The-Delicate-Arch-.png'


function Header(props) {
    const php = props.history.push

    const [mobileMenu, setMobileMenu] = useState(false)
    const [home, setHome] = useState(true)
    const [login, setLogin] = useState(false)
    const [locations, setLocations] = useState(false)
    const [RSVP, setRSVP] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleAnimations)
        window.scrollTo(0, 0)
        axios
            .get('/user/me')
            .then(res => {
                props.loginUser(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const handleAnimations = () => {
        if (window.scrollY > 0) {

        }
    }

    const scrollToTop = () => {
        php('/')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    const scrollToLocations = () => {
        php('/')
        window.scrollTo({
            top: 1050,
            left: 0,
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    const scrollToRSVP = () => {
        php('/')
        window.scrollTo({
            top: 1940,
            left: 0,
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    const scrollToRegistry = () => {
        php('/')
        window.scrollTo({
            top: 3500,
            left: 0,
            behavior: 'smooth'
        })
        setMobileMenu(false)
    }

    const handleOpenLogin = () => {
        setLogin(!login)
        setMobileMenu(false)
    }

    const handleLogout = () => {
        axios
            .delete('/user/logout')
            .then(res => {
                props.logoutUser(res.data)
            })
            .catch(err => alert(err))
        setMobileMenu(false)
    }

    const handleGoToVows = () => {
        php('/vows')
        setMobileMenu(false)
    }

    const notLoggedIn = (
        <img className='arches-img'
            alt='arches logo'
            src={arch}
        />)

    const isNowLoggedIn = (
        <img className='profile-pic'
            alt='users profile picture'
            src={props.user.profile_pic}/>
    )

    return (
        <div className='master-header-div'>

            <div className='arches-container'>
                {props.isLoggedIn ? isNowLoggedIn : notLoggedIn}
                <h1 onClick={() => php('/')}>The Chadwick's</h1>
                {/* <img className='profile-pic-img'
                    alt='profile picture'
                    src={props.user.profile_pic}/> */}
            </div>

            <nav className='navbar'>

                <ul className='large-screen-nav-list'>

                    <li className={`nav-item ${home ? 'current-nav-location' : null}`}
                        onClick={() => scrollToTop()}>Home</li>
                    <li className={`nav-item ${locations ? 'current-nav-location' : null}`}
                        onClick={() => scrollToLocations()}>Venue Locations</li>
                    <li className={`nav-item ${RSVP ? 'current-nav-location' : null}`}
                        onClick={() => scrollToRSVP()}>RSVP</li>
                    <li className='nav-item'
                        onClick={() => php('/vows')}>Our Vows</li>
                    <li className='nav-item'
                        onClick={() => handleOpenLogin()}>Login</li>

                </ul>

                <img className='hamburger'
                    alt='menu icon'
                    src={menu}
                    onClick={() => setMobileMenu(!mobileMenu)} />

                <nav className={`mobile-nav-list-closed ${mobileMenu ? `mobile-nav-list-open` : null}`}>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='Home Icon'
                            src={Home} />
                        <li className='mobile-nav-item'
                            onClick={() => scrollToTop()}>Home</li>
                    </div>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='bride and Groom Icon'
                            src={brideAndGroom} />
                        <li className='mobile-nav-item'
                            onClick={() => scrollToLocations()}>Venue Locations</li>
                    </div>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='RSVP Icon'
                            src={rsvpIcon} />
                        <li className='mobile-nav-item'
                            onClick={() => scrollToRSVP()}>RSVP</li>
                    </div>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='Rings Icon'
                            src={ring} />
                        <li className='mobile-nav-item'
                            onClick={() => handleGoToVows()}>Our Vows</li>
                    </div>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='Bride & Groom Icon'
                            src={gift} />
                        <li className='mobile-nav-item'
                            onClick={() => scrollToRegistry()}>Registry</li>
                    </div>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='Login Icon'
                            src={loginIcon} />
                        <li className='mobile-nav-item'
                            onClick={() => handleOpenLogin()}>Login</li>
                    </div>

                    <div className='mobile-nav-item-container'>
                        <img className='nav-item-icon'
                            alt='Logout Icon'
                            src={powerDown} />
                        <li className='mobile-nav-item'
                            onClick={() => handleLogout()}>Logout</li>
                    </div>

                </nav>

            </nav>
            {login ? <Login open={login} handleOpen={handleOpenLogin} /> : null}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { logoutUser })(withRouter(Header))
