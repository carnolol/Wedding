import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import { withRouter } from 'react-router-dom'
import './Map.css'

const arch = 'https://static.dribbble.com/users/3123194/screenshots/10459671/media/7b439025c70720fd06a717a4e44e9ea9.png'
const hotel ='https://library.kissclipart.com/20180904/hlw/kissclipart-hotel-symbol-clipart-hotel-accommodation-clip-art-fb469134918236dd.jpg'

function Map(props) {
    // Sand Dune Arch location. 38.7642 N, 109.5810 W
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [longitude, setLongitude] = useState(-109.5810)
    const [latitude, setLatitude] = useState(38.7642)

    useEffect(() => {
        axios
            .get('/wedding/locations')
            .then(res => {
                setLocations(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function MyMap(){
        return (
            <GoogleMap 
                defaultZoom={10}
                defaultCenter={{lat: 38.624890, lng: -109.593250}}>
                <Marker position={{lat: latitude, lng: longitude}}
                    icon={{url: arch, scaledSize: new window.google.maps.Size(30, 30)}}/>   
                <Marker position={{lat: 38.5, lng:-109.459908 }}
                    icon={{url: hotel, scaledSize: new window.google.maps.Size(30, 30)}}/> 
            </GoogleMap>
        )
    }

    const MapWrapped = withScriptjs(withGoogleMap(MyMap))

    return (
        <div className='master-map-div'>

            <h1>Map</h1>

            <div className='google-map-container'>
                <MapWrapped 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBR2I3dXefKomnYAtLQqi0uVg8SmHon3w8`}
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}/>
            </div>

        </div>
    )
}

export default Map