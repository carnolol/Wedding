import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Login.css'
import family from '../photos/Family.jpg'
import TextFiend from '@material-ui/core/TextField'

const close = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png'

function Login(props) {

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [loggingIn, setLoggingIn] = useState(true)
    const [email, setEmail] = useState('')

    useEffect(() => {

    }, [])
    //TODO: Need to add input boxes using material UI, need to update redux correctly with users info.
    return (
        <div className='master-login-div'>

            <div className='login-form-container'>

                <img className='close-img'
                    alt='X'
                    src={close}
                    onClick={() => props.handleOpen()} />

                <div className='family-pic-container'>
                    <img className='family-pic'
                        alt='The Chadwicks'
                        src={family} />
                    <h1> The Chadwick's</h1>
                </div>

                <div className='first-and-last-name-inputs'>
                    {loggingIn ? (
                        <TextFiend
                            label='Email'
                            value={email}
                            required={true}
                            onChange={e => setEmail(e.target.value)} />
                    ) : (
                        <>
                        <TextFiend
                            label='First Name'
                            value={firstName}
                            required={true}
                            onChange={(e) => setFirstName(e.target.value)} />
                        <TextFiend
                            label='Last Name'
                            value={lastName}
                            required={true}
                            onChange={(e) => setLastName(e.target.value)} /> </>)}
                </div>

                <div className='password-container'>
                        {loggingIn ? (
                            <TextFiend
                                label='Password'
                                value={password1}
                                required={true}
                                onChange={(e) => setPassword1(e.target.value)}/>
                        ) : (
                            <>
                             <TextFiend
                                label='Password'
                                value={password1}
                                required={true}
                                onChange={(e) => setPassword1(e.target.value)}/>
                            <TextFiend
                                label='Verify Password'
                                value={password2}
                                required={true}
                                onChange={(e) => setPassword2(e.target.value)}/>
                            </>
                        )}
                </div>

                <div>
                    <p>Don't have an account? </p>
                    <h3 onClick={() => setLoggingIn(!loggingIn)}>REGISTER HERE</h3>
                </div> 

            </div> 

        </div>
    )
}

export default Login