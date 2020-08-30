import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Login.css'

const close = 'https://cdn.onlinewebfonts.com/svg/img_365840.png'

function Login(props) {

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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
                    onClick={() => props.handleOpen()}/>

                <button onClick={() => props.handleOpen()}>XXXXXX</button>
            </div>

        </div>
    )
}

export default Login