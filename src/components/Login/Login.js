import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Login.css'
import family from '../photos/Family.jpg'
import TextFiend from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { loginUser } from '../../ducks/userReducer'
import swal from 'sweetalert'

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

    const handleSubmit = e => {
        e.preventDefault()
        handleReset()
    }

    const handleReset = () => {
        setPassword1('')
        setPassword2('')
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    const handleLogin = () => {
        const body = {
            email: email,
            password: password1
        }
        axios
            .post('/user/login', body)
            .then(res => {
                console.log(res.data)
                props.loginUser(res.data)
            })
            .catch(err => alert(err))
    }

    const handleRegister = () => {
        const body = {
            first_name: firstName,
            last_name: lastName,
            password: password1,
            email: email
        }
        axios
            .post('/user/register', body)
            .then(res => {
                props.loginUser(res.data)
                // handleReset()
                props.handleOpen()
            })
            .catch(() => swal(`Looks like you already have an account ${firstName}. Please login`, 'Error', 'error'))
    }

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
                        null
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

                <TextFiend
                    label='Email'
                    value={email}
                    required={true}
                    onChange={e => setEmail(e.target.value)} />

                <div className='password-container'>
                    {loggingIn ? (
                        <TextFiend
                            label='Password'
                            value={password1}
                            required={true}
                            type='password'
                            onChange={(e) => setPassword1(e.target.value)} />
                    ) : (
                            <>
                                <TextFiend
                                    label='Password'
                                    value={password1}
                                    required={true}
                                    type='password'
                                    onChange={(e) => setPassword1(e.target.value)} />
                                <TextFiend
                                    label='Verify Password'
                                    value={password2}
                                    required={true}
                                    type='password'
                                    onChange={(e) => setPassword2(e.target.value)} />
                            </>
                        )}
                </div>

                <form onSubmit={e => handleSubmit(e)}>
                    {loggingIn ? (
                        <button className='login-button'
                            onClick={() => handleLogin()}>SIGN IN</button>
                    ) : (
                            <button className='login-button'
                                onClick={() => handleRegister()}>REGISTER</button>
                        )}
                </form>

                <div>
                    <p>Don't have an account? </p>
                    <h3 onClick={() => setLoggingIn(!loggingIn)}>REGISTER HERE</h3>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { loginUser })(Login)