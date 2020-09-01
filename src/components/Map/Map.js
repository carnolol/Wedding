import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { withRouter } from 'react-router-dom'
import MapIcon from './MapIcon.svg'
import './Map.css'

function Map(props) {
    console.log(process.env.GOOGLE_API_KEY)
    // Sand Dune Arch location. 38.7642 N, 109.5810 W
    const [longitude, setLongitude] = useState(-109.5810)
    const [latitude, setLatitude] = useState(38.7642)

    useEffect(() => {
        //TODO: populate google map stuff here
    }, [])

    const MapMarker = () => {
        return (
            <div>
                <img className='pin'
                    alt='need new svg'
                    src={MapIcon} />
            </div>
        )
    }

    return (
        <div className='master-map-div'>
            <h1>Map</h1>
            <div className='google-map-container'>
                <GoogleMapReact 
                    bootstrapURLKeys={{
                        key: 'AIzaSyBR2I3dXefKomnYAtLQqi0uVg8SmHon3w8'
                    }}
                    defaultZoom={12}
                    defaultCenter={{
                        lat: latitude,
                        lng: longitude
                    }}>
                    <MapMarker lat={latitude} lng={longitude} />
                </GoogleMapReact>
            </div>

        </div>
    )
}

export default Map