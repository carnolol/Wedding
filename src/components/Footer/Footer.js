import React from 'react'
import linkedIn from '../icons/icons8-linkedin-2-30 copy 2.png'
import gitHub from '../icons/icons8-github-60 copy.png'
import resume from '../icons/icons8-shared-document-64 copy.png'
import './Footer.css'

function Footer(props) {

    return (
        <div className='master-footer-div'>

            <h1>We Did it! We finally got married.</h1>

            <p id='about-me-text'> For anyone who doesn't know, I (Mike) have made a major career change over the last year and have decided to become a programmer! I have fallen in love with being able to make web applications and learning new things each day. To celebrate our love we decided to make a website to show our friends and family our love from the beginning. Thank you for being there for us.</p>

            <div className='holds-all-icons'>

                <div className='footer-icons-container'>
                    <a target='_blank'
                        href="https://www.linkedin.com/in/michael-chadwick91/">
                        <img className='footer-icons'
                            src={linkedIn}
                            alt='LinkedIn Logo' />
                    </a>
                    <p>LinkedIn</p>
                </div>

                <div className='footer-icons-container'>
                    <a target='_blank'
                        href="https://github.com/carnolol">
                        <img className='footer-icons'
                            src={gitHub}
                            alt='LinkedIn Logo' />
                    </a>
                    <p>GitHub</p>
                </div>

                <div className='footer-icons-container'>
                    <a target='_blank'
                        href="https://docs.google.com/document/d/1f1iLoo4w-FYPjHv3juua0zw-kgrwySCR8vZvpxsxu2U/edit?usp=sharing">
                        <img className='footer-icons'
                            src={resume}
                            alt='LinkedIn Logo' />
                    </a>
                    <p>Resume</p>
                </div>

            </div>

            <p>All icons supplied by icons8.com</p>

        </div>
    )
}

export default Footer