import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import orange from '@material-ui/core/colors/orange'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import swal from 'sweetalert'
import './Rsvp.css'


const target = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/300px-Target_Corporation_logo_%28vector%29.svg.png'

const amazon = 'https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG-300x300.png'

function Rsvp(props) {

    console.log('REDUX USER:', props.user)

    const [message, setMessage] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState(0)
    const [requiresLodging, setRequiresLodging] = useState('Yes')

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: orange[700]
            },
        }
    })

    const sendRsvpEmail = () => {
        const body = {
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            email: props.user.email,
            numberOfGuests: numberOfGuests,
            requiresLodging: requiresLodging
        }
        if (props.isLoggedIn) {
            axios.post('/wedding/rsvp', body)
            swal({
                title: 'Success!',
                text: `Thank you for RSVPing to Mike & Claire's wedding!`,
                icon: 'success',
                button: 'Close'
            })
            handleReset()
        } else {
            swal({
                title: 'Please Login',
                text: 'You must login before you can RSVP.',
                icon: 'error',
                buttons: ['OK', 'Login']
            })
            handleReset()
        }
    }

    const handleSendMessage = () => {
        const body = {
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            message: message
        }
        if (props.isLoggedIn) {
            axios.post('/wedding/message', body)
            swal({
                title: 'Message Sent!',
                text: `Thank you for sending us a message! We will get back to you soon!`,
                icon: 'success',
                button: 'Close'
            })
            handleReset()
        } else{
            swal({
                title: 'Please Login',
                text: 'You must login before you can RSVP.',
                icon: 'error',
                buttons: ['OK', 'Login']
            })
            handleReset()
        }
    }

    const handleReset = () => {
        setMessage('')
        setNumberOfGuests(0)
        setRequiresLodging('')
    }


    return (
        <div className='master-rsvp-div'>

            <h1 className='rsvp-h1'>Please RSVP to our wedding!</h1>

            <div className='RSVP-container'>

                <div className='menu-container'>
                    <p>Do you want to stay with us at the Airbnb?</p>
                    <select className='lodging-select'
                        value={requiresLodging}
                        onChange={e => setRequiresLodging(e.target.value)}>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </select>
                </div>

                <div className='menu-container'>
                    <p>How many guests are coming with you?</p>
                    <select className='lodging-select'
                        value={numberOfGuests}
                        onChange={e => setNumberOfGuests(+e.target.value)}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>

                <button className='rsvp-btns'
                    onClick={() => sendRsvpEmail()}>
                    RSVP
                </button>

                <h2 className='rsvp-h2'>Have a question? Or just want to chat? Message us!</h2>

                <ThemeProvider theme={theme}>
                    <TextField
                        label='Message to the Bride & Groom'
                        variant='outlined'
                        color="primary"
                        multiline={true}
                        rows='5'
                        value={message}
                        className='ui-inputs'
                        onChange={e => setMessage(e.target.value)} />
                </ThemeProvider>

                <div className='rsvp-btn-container'>
                    <button className='rsvp-btns'
                        onClick={() => handleSendMessage()}>Send Message</button>
                </div>

                <p>Please be sure to check your spam folder for the RSVP E-mail!</p>
            </div>

            <div className='registry-container'>

                <h1>We are registered at Target and Amazon.</h1>

                <div className='registry-logo-container'>
                    <a href='https://www.target.com/gift-registry/giftgiver?registryId=88d9bb4897f543d197d2b31e53f268cc&type=WEDDING'>
                        <img className='registry-logo'
                            src={target}
                            alt='target logo' />
                    </a>

                    <a href='https://www.amazon.com/wedding/organize-registry?ref_=wedding_subnav'>
                        <img className='registry-logo'
                            src={amazon}
                            alt='amazon logo'/>
                    </a>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, null)(Rsvp)