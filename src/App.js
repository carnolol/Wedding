import React from 'react';
import Header from './components/Header/Header'
import Slideshow from './components/Slideshow/Slideshow'
import Footer from './components/Footer/Footer'
import './App.css';
import './Reset.css'

function App(props) {
  return (
    <div className='master-app-div'>
      <Header/>
      <Slideshow/>
      <Footer/>
    </div>
  )
}

export default App;
