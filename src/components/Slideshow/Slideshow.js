import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios'
import loveHero from '../photos/mike-claire-love.JPG'
import './Slideshow.css'

function Slideshow(props) {

    const [pictures, setPictures] = useState([])
    let [stopCarousel, setStopCarousel] = useState(true)
    let [speedOfCarousel, setSpeedOCarousel] = useState(1750)

    useEffect(() => {
        axios
            .get('/wedding/pictures')
            .then(res => {
                setPictures(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // dots: true,
    // infinite: true,
    // autoplaySpeed: 4300,
    // fade: true,
    // autoplay: true,
    // speed: 3000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: true,

    const settings = {
        fade: true,
        autoplay: stopCarousel,
        autoplaySpeed: speedOfCarousel,
        // autoplaySpeed is the setting of how long the picture stays visible
        // arrows: true,
        infinite: true,
        swipeToSlide: true,
        speed: speedOfCarousel,
        // speed is the setting of how long it takes to transition or fade between each picture
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    let weddingPictures = pictures.map(picture => {
        return (
            <div className='wedding-picture-container'>
                <img className='wedding-picture'
                    alt='Mike and Claire'
                    src={picture.img} />
                <p>{picture.id - 11}/{pictures.length}</p>
            </div>

        )
    })

    //    const pause = () => {
    //         Slider.slickPause();
    //       }

    const handleSpeedIncrease = () => {
        if (speedOfCarousel <= 1000) {
            return setSpeedOCarousel(500)
        } else {
            return setSpeedOCarousel(speedOfCarousel -= 750)
        }
    }

    return (
        <div className='master-slideshow-div'>

            <div className='mike-and-claire'>

                <div className='slideshow-h1-container'>
                    <h1 className='slideshow-h1'>Celebrating Michael and Claire</h1>
                    <h1 className='slideshow-h1'>A love 7 years in the making</h1>
                </div>
                {/* <h1 className='slideshow-h1'>10-24-2020</h1> */}

            </div>

            <h1 className='slider-h1'>From the beginning of our love till now!</h1>

            <div className='slider-container'>
                <Slider ref={slider => (slider = slider)} {...settings} style={{ width: '90%' }}>
                    {weddingPictures}
                </Slider>
            </div>
            <div className='slider-btn-container'>

                <button className='slider-buttons'
                    onClick={() => setSpeedOCarousel(speedOfCarousel += 750)}>Slow Down</button>
                {/* <button className='slider-buttons'
                    onClick={() => Slider.slickPause()}>Pause</button> */}
                    
                <button className='slider-buttons'
                    onClick={() => setStopCarousel(!stopCarousel)}>{stopCarousel ? 'Playing' : 'Paused'}</button>
                <button className='slider-buttons'
                    onClick={() => handleSpeedIncrease()}>Speed Up</button>

            </div>
        </div>
    )
}

export default Slideshow
