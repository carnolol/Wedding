const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

module.exports = {
    sendRSVP: async (req, res) => {
        const {first_name, last_name, email, numberOfGuests, requiresLodging} = req.body
        console.log('rsvp', req.body)
        let mailList = [
            'michael.chadwick91@gmail.com',
            'iprice22isright@gmail.com'
        ]

        let mailOptions = {
            from:'michael-and-claire@outlook.com',
            to: email,
            subject: `Thank you ${first_name} ${last_name} for RSVPing to Michael & Claire's Wedding!`,
            text: `You have successfully RSVP'd to Michael & Claire's wedding! Number of guests with you: ${numberOfGuests}. Do you require lodging? ${requiresLodging}`,
            cc: mailList
        }

        transporter.sendMail(mailOptions, function(err, data){
            if(err){
                console.log('NODEMAILER HAS AN ERROR:' , err)
            } else {
                console.log('Email has been sent!!' + data.response)
            }
        })
        res.status(200).send(mailOptions)
        console.log(mailOptions)
    },
    sendMessageToBrideAndGroom: async (req, res) => {
        const {first_name, last_name, message} = req.body

        let mailList = [
            'michael.chadwick91@gmail.com',
            'iprice22isright@gmail.com'
        ]

        let mailOptions = {
            from: 'michael-and-claire@outlook.com',
            to: mailList,
            subject: `NEW MESSAGE ABOUT THE WEDDING FROM: ${first_name} ${last_name}`,
            text: message
        }

        transporter.sendMail(mailOptions, function(err, data){
            if(err){
                console.log('NODEMAILER HAS AN ERROR:' , err)
            } else {
                console.log('Email has been sent!!' + data.response)
            }
        })
        res.status(200).send(mailOptions)
        console.log(mailOptions)

    }
}