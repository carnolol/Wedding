import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import swal from 'sweetalert'
import './Rsvp.css'

function Rsvp(props){

    const [message, setMessage] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState(0)
    const [requiresLodging, setRequiresLodging] = useState('')

    const sendRsvpEmail = () => {
        const body = {
            first_name: props.first_name,
            last_name: props.last_name,
            email: props.email,
            numberOfGuests: numberOfGuests,
            requiresLodging: requiresLodging
        }
        axios.post('/wedding/rsvp', body)
    }

    const handleReset = () => {
        setMessage('')
        setNumberOfGuests(0)
        setRequiresLodging('')
    }

    return(
        <div className='master-rsvp-div'>

            <h1 className='rsvp-h1'>Please RSVP to our wedding!</h1>

            <div className='RSVP-container'>
                
                <p>Please be sure to check your spam folder for the RSVP E-mail!</p>
            </div>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Rsvp)