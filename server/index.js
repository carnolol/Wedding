require('dotenv').config() 
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const app = express()
app.use(express.json())
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const userCtrl = require('./userController')
const commentCtrl = require('./commentsController')
const slideShowCtrl = require('./slideshowController')
const googleCtrl = require('./googleMapsController')
const mailCtrl = require('./mailController')

app.use(session({
    resave: false, 
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 31}, // One Month Cookie
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database is Online')
    app.listen(SERVER_PORT, () => console.log(`Docked at port ${SERVER_PORT}`))
})

//* USER ENDPOINTS
app.get('/user/me', userCtrl.getLoggedInUser)
app.post('/user/login', userCtrl.login)
app.post('/user/register', userCtrl.register)
app.delete('/user/logout', userCtrl.logout)

//* Nodemailer
app.post('/wedding/rsvp', mailCtrl.sendRSVP)
app.post('/wedding/message', mailCtrl.sendMessageToBrideAndGroom)

//* SLIDESHOW ENDPOINTS

app.get('/wedding/pictures' , slideShowCtrl.getSlideshowPictures)
app.get('/wedding/airbnb', slideShowCtrl.getAirbnbPictures)

//* COMMENTS ENDPOINTS

app.get('/wedding/comments', commentCtrl.addComment)

//* GOOGLE MAPS LOCATIONS ENDPOINTS
app.get('/wedding/locations', googleCtrl.getLocations)
//TODO: add DB file to add comments (work on MVP before doing this, and create Table for comments.)