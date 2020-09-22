import React from 'react'
import './Vows.css'

function Vows(props){
    return(
        <div className='master-vow-div'>

            <div className='vow-hero'>
                <h1>Our Vows</h1>
            </div>

            <div className='vows-container'>

                <div className='vows'>
                	<h1>Michael's vows to Claire</h1>
                    <p>Michaels vows are still being written!</p>
                </div>

                <div className='vows'>
                    <h1>Claire's vows to Michael</h1>
                    <p>Claire's vows are still being written!</p>
                </div>

            </div>

        </div>
    )
}

export default Vows