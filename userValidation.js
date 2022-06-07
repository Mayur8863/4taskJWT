const Joi = require('joi');

const UserValidation = data => {
    const schema = Joi.object({
        name : Joi.string()
                .min(4)
                .required(),
        email : Joi.string()
                .min(4)
                .required(),
        password : Joi.string()
                .min(4)
                .required(),
    })
    const result = schema.validate(data)
    return result;
}

module.exports = UserValidation;