import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'

function Map(props){

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

   useEffect(() =>{
    //TODO: populate google map stuff here
    }, [])

    return(
        <div>
            Map.JS
        </div>
    )
}

export default Map