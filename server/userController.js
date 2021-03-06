bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
require('dotenv').config()

const moabPictures = [
'https://www.planetware.com/photos-large/USUT/utah-moab-things-to-do-delicate-arch-hike.jpg',
'https://www.discovermoab.com/wp-content/uploads/2017/11/rainbow-arch-through-hole.jpg',
'https://miro.medium.com/max/8064/1*aiSVY3AuiDpnH-Z-upixnQ.jpeg'
]

const randomIndex = Math.floor(Math.random() * moabPictures.length)
const randomMoabPicture = moabPictures[randomIndex]

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const existingUser = await db.check_if_user([email])
        if(!existingUser[0]){
            return res.status(404).send('Please register before logging in')
        }
        const authenticated = bcrypt.compareSync(password, existingUser[0].password)
        if(authenticated){
            delete existingUser[0].password
            req.session.user=existingUser[0]
            res.status(200).send(req.session.user)
            console.log('LOGIN REQ SESSION USER:', req.session.user)
        } else {
            res.status(403).send('Username or Password is incorrect')
        }
        //WORKING
    },
    register: async(req, res) => {
        const db = req.app.get('db')
        const {first_name, last_name, password, email} = req.body
        const existingUser = await db.check_if_user([email])
        if(existingUser[0]){
            return res.status(409).send('Looks like you already have any account, Please Login!')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //TODO: Need to creat array of profile pictures to insert into db. but it works for now without that feature
        const profile_pic = randomMoabPicture
        const newUser = await db.register_new_user([first_name, last_name, profile_pic, hash, email])
        req.session.user = newUser[0]
        console.log('New Registered User:', req.session.user)
        res.status(200).send(req.session.user)
        // WORKING
    },
    getLoggedInUser: async (req, res) => {
        if(req.session.user){
            return res.status(200).send(req.session.user)
        } else {
            res.sendStatus(409)
        }
    } ,
    logout: async (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
        //working
    },
}