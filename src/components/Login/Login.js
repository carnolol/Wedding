import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Login.css'

function Login(props) {

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {

    }, [])

    return (
        <div className='master-login-div'>
            Login.js
            <div className='child'>

            </div>
        </div>
    )
}

export default Login