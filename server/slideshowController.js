module.exports = {
    getSlideshowPictures: async (req, res) => {
        const db = req.app.get('db')
        const pictures = await db.get_slideshow_pictures()
        res.status(200).send(pictures)
    },
    getAirbnbPictures: async (req, res) => {
        const db = req.app.get('db')
        const airbnb = await db.get_airbnb_pictures()
        res.status(200).send(airbnb)
    }
}