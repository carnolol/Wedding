import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios'
import loveHero from '../photos/mike-claire-love.JPG'
import './Slideshow.css'

function Slideshow(props) {

    const [pictures, setPictures] = useState([])
    const [speedOfCarousel, setSpeedOCarousel] = useState(750)

    useEffect(() => {
        axios
            .get('/wedding/pictures')
            .then(res => {
                setPictures(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const settings = {
        autoplaySpeed: 1500,
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        speed: speedOfCarousel,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    let weddingPictures = pictures.map(picture => {
        return (
            <div className='slider-container'
                key={picture.id}>
                    <img className='wedding-picture'
                        alt='Mike and Claire'
                        src={picture.img} />
                    <p>{picture.id}</p>
            </div>
        )
    })

    return (
        <div className='master-slideshow-div'>

            <div className='mike-and-claire'>

                <h1>Celebrating Michael and Claire</h1>
                <h1>A love 7 years in the making</h1>

            </div>

            <Slider {...settings} style={{height: '50%', width: '80%'}}>
                {weddingPictures}
            </Slider>
        </div>
    )
}

export default Slideshow
