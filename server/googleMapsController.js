module.exports = {
    getLocations: async (req, res) => {
        const db = req.app.get('db')
        const locations = await db.get_google_locations()
        res.status(200).send(locations)
    }
}