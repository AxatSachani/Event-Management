const { model, Schema } = require('mongoose')

const eventSchema = new Schema({
    event_name: {
        type: String,
        required: true
    },
    event_title: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
        required: true
    },
    event_location: {
        type: String,
        required: true
    },
    event_date: {
        type: Number,
        required: true
    },
    imagesPath: {
        type: [String],
        required: true
    },
}, {
    collation: {
        locale: 'en',
        strength: 2
    },
    timestamps: { currentTime: () => Date.now() }
})

const Event = model('event', eventSchema)

module.exports = Event