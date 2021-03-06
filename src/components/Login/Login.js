import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Login.css'
import family from '../photos/Family.jpg'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/styles'
import teal from '@material-ui/core/colors/teal'
import { createMuiTheme } from '@material-ui/core/styles'
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
    const [errorLoggingIn, setErrorLoggingIn] = useState(false)
    const [email, setEmail] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        handleReset()
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: teal[600]
            },
        }
    })

    const handleReset = () => {
        setPassword1('')
        setPassword2('')
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const body = {
            email: email,
            password: password1
        }
        if (email && password1) {
            axios
                .post('/user/login', body)
                .then(res => {
                    console.log(res.data)
                    props.loginUser(res.data)
                    props.handleOpen()
                })
                .catch(err => {
                    console.log(err)
                    setErrorLoggingIn(true)
                    handleReset()
                })
        }
    }

    const handlePasswordMatchingRegister = () => {
        if (password1 !== password2) {
            setErrorLoggingIn(true)
            handleReset()
        } else if (password1 === password2) {
            handleRegister()
        }
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
            })
            .catch(() => swal(`Looks like you already have an account ${firstName}. Please login`, 'Whoops!', 'error'))
        props.handleOpen()
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
                                <TextField
                                    fullWidth
                                    error={errorLoggingIn}
                                    label='First Name'
                                    value={firstName}
                                    required={true}
                                    onChange={(e) => setFirstName(e.target.value)} />
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        fullWidth
                                        error={errorLoggingIn}
                                        label='Last Name'
                                        value={lastName}
                                        required={true}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </ThemeProvider> </>)}
                </div>

                <div className='email-input'>
                    <ThemeProvider theme={theme}>
                        <TextField
                            fullWidth
                            error={errorLoggingIn}
                            label='Email'
                            value={email}
                            required={true}
                            onChange={e => setEmail(e.target.value)} />
                    </ThemeProvider>
                </div>

                <div className='password-inputs'>
                    {loggingIn ? (
                        <TextField
                            error={errorLoggingIn}
                            size='large'
                            helperText={errorLoggingIn ? 'Incorrect email or password' : null}
                            label='Password'
                            value={password1}
                            required={true}
                            type='password'
                            onChange={(e) => setPassword1(e.target.value)} />
                    ) : (
                            <>
                                <TextField
                                    error={errorLoggingIn}
                                    helperText={errorLoggingIn ? 'Passwords do not match' : null}
                                    label='Password'
                                    value={password1}
                                    required={true}
                                    type='password'
                                    onChange={(e) => setPassword1(e.target.value)} />
                                <TextField
                                    error={errorLoggingIn}
                                    helperText={errorLoggingIn ? 'Passwords do not match' : null}
                                    label='Verify Password'
                                    value={password2}
                                    required={true}
                                    type='password'
                                    onChange={(e) => setPassword2(e.target.value)} />
                            </>
                        )}
                </div>

                <form className='login-buttons-container'
                    onSubmit={e => handleLogin(e)}>
                    {loggingIn ? (
                        <button className='login-button'
                            type='submit'
                            onSubmit={(e) => handleLogin(e)}
                            onClick={(e) => handleLogin(e)}>SIGN IN</button>
                    ) : (
                            <button className='login-button'
                                onClick={() => handlePasswordMatchingRegister()}>REGISTER</button>
                        )}
                </form>

                {loggingIn ? (
                    <div className='register-container'
                        onClick={() => setLoggingIn(!loggingIn)}>
                        <p>Don't have an account? </p>
                        <h2 className='register-and-login'
                            onClick={() => setLoggingIn(!loggingIn)}>REGISTER HERE</h2>
                    </div>
                ) : (
                        <h2 className='register-and-login2'
                            onClick={() => setLoggingIn(!loggingIn)}>Back to Login</h2>
                    )}

            </div>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { loginUser })(Login)