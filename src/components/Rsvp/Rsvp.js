import React, {useState} from 'react'
import './Rsvp.css'

function Rsvp(props){
    return(
        <div className='master-rsvp-div'>

            <h1 className='rsvp-h1'>Please RSVP to our wedding!</h1>

            <div className='RSVP-container'>
                <p>Please be sure to check your spam folder for the RSVP E-mail!</p>
            </div>

        </div>
    )
}

export default Rsvp