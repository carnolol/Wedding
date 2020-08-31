import React, { useEffect, useState } from 'react'
import axios from 'axios'
import menu from '../icons/60-hamburger-white copy.png'
import Login from '../Login/Login'
import { connect } from 'react-redux'
import {logoutUser} from '../../ducks/userReducer'
import {withRouter} from 'react-router-dom'

import './Header.css'

function Header(props) {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [home , setHome] = useState(true)
    const [login, setLogin] = useState(false)
    const [locations, setLocations] = useState(false)
    const [RSVP, setRSVP] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleAnimations)
    }, [])

    const php = props.history.push

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

    const handleOpenLogin = () =>{
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

    return (
        <div className='master-header-div'>

            <h1 onClick={() => php('/')}>The Chadwick's</h1>

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
                    onClick={() => setMobileMenu(!mobileMenu)}/>

                <nav className={`mobile-nav-list-closed ${mobileMenu ? `mobile-nav-list-open` : null}`}>

                    <li className='mobile-nav-item'
                        onClick={() => scrollToTop()}>Home</li>
                    <li className='mobile-nav-item'
                        onClick={() => scrollToTop()}>Venue Locations</li>
                    <li className='mobile-nav-item'
                        onClick={() => scrollToTop()}>RSVP</li>
                    <li className='mobile-nav-item'
                        onClick={() => php('/vows')}>Our Vows</li>
                    <li className='mobile-nav-item'
                        onClick={() => handleOpenLogin()}>Login</li>
                    <li className='mobile-nav-item'
                        onClick={() => handleLogout()}>Logout</li>

                </nav>

            </nav>
            {login ? <Login open={login} handleOpen={handleOpenLogin}/> : null}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {logoutUser})(withRouter(Header))
