import React from 'react';
import Header from './components/Header/Header'
import Slideshow from './components/Slideshow/Slideshow'
import Footer from './components/Footer/Footer'
import './App.css';
import './Reset.css'
import routes from './routes'

function App(props) {
  return (
    <div className='master-app-div'>
      <Header/>
      <Slideshow/>
      <Footer/>
      {/* {routes} */}
    </div>
  )
}

export default App;
