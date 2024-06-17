const Joi = require('joi');

// create events data validator
exports.createEventSchema = Joi.object({
    event_name: Joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Event name must be a string',
            'string.empty': 'Event name cannot be empty',
            'any.required': 'Event name is required'
        }),
    event_title: Joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Event title must be a string',
            'string.empty': 'Event title cannot be empty',
            'any.required': 'Event title is required'
        }),
    event_description: Joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Event description must be a string',
            'string.empty': 'Event description cannot be empty',
            'any.required': 'Event description is required'
        }),
    event_location: Joi.string()
        .trim()
        .required()
        .messages({
            'string.base': 'Event location must be a string',
            'string.empty': 'Event location cannot be empty',
            'any.required': 'Event location is required'
        }),
    event_date: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Event date must be a Unix timestamp',
            'number.integer': 'Event date must be an integer',
            'number.positive': 'Event date must be a positive number',
            'any.required': 'Event date is required'
        }),
    images: Joi.array().items(
        Joi.object({
            fieldname: Joi.string(),
            encoding: Joi.string(),
            destination: Joi.string(),
            originalname: Joi.string().required(),
            mimetype: Joi.string().required(),
            filename: Joi.string().required(),
            path: Joi.string().required(),
            size: Joi.number().required()
        }).required()
    ).min(1).required().messages({
        'array.base': 'Images must be an array',
        'array.min': 'At least one image is required',
        'any.required': 'Images are required'
    })
});