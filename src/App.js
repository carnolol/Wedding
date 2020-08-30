import React from 'react';
import Header from './components/Header/Header'
import Slideshow from './components/Slideshow/Slideshow'
import Footer from './components/Footer/Footer'
import Rsvp from './components/Rsvp/Rsvp'
import Map from './components/Map/Map'
import './App.css';
import './Reset.css'
import {withRouter} from 'react-router-dom'
import routes from './routes'

function App(props) {

  const plp = props.location.pathname

  return (
    <div className='master-app-div'>
      <Header/>
      {plp === '/' ? (<> <Slideshow/> <Map/> <Rsvp/> </>): routes}
      <Footer/>
      {/* {routes} */}
    </div>
  )
}

export default withRouter(App);
