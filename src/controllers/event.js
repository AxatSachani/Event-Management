const { default: mongoose } = require("mongoose")
const { createEventSchema } = require("../validator/event")

exports.createEvent = async (req, res) => {
    const msg = 'You Have Created Event Successfully'
    try {
        const { error, value } = createEventSchema.validate({ ...req.body, images: req.files })
        if (error) {
            throw new Error(error.message)
        }
        const { event_name, event_title, event_description, event_location, event_date, images } = value
        const imagesPath = images.map(img => img.path)

        await mongoose.model('event')({ event_name, event_title, event_description, event_location, event_date, imagesPath }).save()

        res.status(201).send({ code: 201, success: true, message: msg })
    } catch (error) {
        res.status(400).send({ code: 400, success: false, error: error.message })
    }
}