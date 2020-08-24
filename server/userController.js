bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
require('dotenv').config()

const moabPictures = [

]

const random = Math.floor(math.random() * moabPictures.length)
const randomMoabPicture = moabPictures[random]

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const {first_name, last_name, password} = req.body
        const existingUser = await db.check_if_user([first_name, last_name])
        if(!existingUser[0]){
            return res.status(404).send('Please register before logging in')
        }
        const authenticated = bcrypt.compareSync(password, existingUser[0].password)
        if(authenticated){
            delete existingUser[0].password
            req.session.user=existingUser[0]
            res.status(200).send(req.session.user)
            console.log('REQ SESSION USER:', req.session.user)
        } else {
            res.status(403).send('Username or Password is incorrect')
        }
    },
    register: async(req, res) => {
        const db = req.app.get('db')
        const {first_name, last_name, password, email} = req.body
        const existingUser = await db.check_if_user([first_name, last_name])
        if(existingUser[0]){
            return res.status(409).send('Looks like you already have any account, Please Login!')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const profile_pic = randomMoabPicture
        const newUser = await db.register_new_user([first_name, last_name, profile_pic, hash, email])
        req.session.user = newUser[0]
        res.status(200).send(req.session.user)
    },
    getLoggedInUser: async (req, res) => {
        if(req.sess.ion.user){
            return res.status(200).send(req.session.user)
        } else {
            res.sendStatus(409)
        }
    } ,
    logout: async (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
}