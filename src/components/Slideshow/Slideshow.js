import React, {useState, useEffect} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios'
import loveHero from '../photos/mike-claire-love.JPG'
import './Slideshow.css'

function Slideshow(props){

    const [pictures, setPictures] = useState([])

    useEffect(() => {
        // axios
        //     .get('/wedding/pictures')
        //     .then(res => {
        //         setPictures(res.data)
        //     })
        //     .catch(err => console.log(err))
    },[])

    let weddingPictures = pictures.map(picture => {
        return(
            <div key={picture.id}>
                <img className='wedding-picture'
                    alt='Mike and Claire'
                    src={picture.img}/>
                    <p>{picture.id}</p>
            </div>
        )
    })

        return (
            <div className='master-slideshow-div'>

                <div className='mike-and-claire'>

                    <h1>Celebrating Michael and Claire</h1>

                    {/* <img className='landing-hero'
                        src={loveHero}
                        alt='michael and claire in love'/> */}
                </div>

                {weddingPictures}
            </div>
        )
}

export default Slideshow
