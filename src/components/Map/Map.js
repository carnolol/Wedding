import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { withRouter } from 'react-router-dom'
import './Map.css'

const arch = 'https://static.dribbble.com/users/3123194/screenshots/10459671/media/7b439025c70720fd06a717a4e44e9ea9.png'
const hotel = 'https://library.kissclipart.com/20180904/hlw/kissclipart-hotel-symbol-clipart-hotel-accommodation-clip-art-fb469134918236dd.jpg'

function Map(props) {
    // Sand Dune Arch location. 38.7642 N, 109.5810 W
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [longitude, setLongitude] = useState(-109.5810)
    const [latitude, setLatitude] = useState(38.7642)
    const [airbnb, setAirbnb] = useState([])

    useEffect(() => {
        axios
            .get('/wedding/locations')
            .then(res => {
                setLocations(res.data)
                axios
                    .get('/wedding/airbnb')
                    .then(res => {
                        setAirbnb(res.data)
                    })
            })
            .catch(err => console.log(err))
    }, [])

    function MyMap() {

        return (
            <GoogleMap
                defaultZoom={9.9}
                defaultCenter={{ lat: 38.684890, lng: -109.593250 }}>

                {locations.map(location => {
                    return <Marker
                        key={location.id}
                        position={{ lat: +location.lat, lng: +location.lng }}
                        icon={{ url: location.image, scaledSize: new window.google.maps.Size(35, 35) }}
                        onClick={() => setSelectedLocation(location)} />

                })}

                {selectedLocation && (
                    <InfoWindow
                        onCloseClick={() => setSelectedLocation(null)}
                        position={{ lat: +selectedLocation.lat, lng: +selectedLocation.lng }}>
                        <div style={{}}>
                            <h1>{selectedLocation.name}</h1>
                            <br></br>
                            <p>{selectedLocation.description}</p>
                            <br></br>
                            <p>Address: {selectedLocation.address}</p>
                            <br></br>
                            <a target='_blank'
                                href={selectedLocation.href}>
                                <p>Click to see pictures of location</p>
                            </a>
                        </div>
                    </InfoWindow>
                )}

            </GoogleMap>
        )
    }

    const MapWrapped = withScriptjs(withGoogleMap(MyMap))

    const airbnbPictures = airbnb.map(picture => {
        return(
                <img className='airbnb-picture'
                    alt={`air bnb picture #${picture.id} is broken`}
                    src={picture.img}/>
        )
    }) 

    return (
        <div className='master-map-div'>

            <h1 className='map-h1'>See where we're staying!</h1>
            <p>Click on a location to learn more about each place!</p>
            <div className='google-map-container'>
                {locations ? <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBR2I3dXefKomnYAtLQqi0uVg8SmHon3w8`}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />} /> : null}
            </div>

            <div className='airbnb-header-container'>
                <h1>Airbnb</h1>
                <div className='airbnb-subcontainer'>
                    <h2>
                        Address:
                    </h2>
                    <p> 168 E Mt Peale Dr, Moab, UT 84532</p>
                </div>
            </div>

            <div className='airbnb-image-container'>     
                {airbnbPictures}     
            </div>       

        </div>
    )
}

export default Map