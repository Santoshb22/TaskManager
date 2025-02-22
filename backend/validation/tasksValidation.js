const Joi = require("joi");

const createTaskValidation = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.string().valid("TODO", "DONE"),
        linkedFile: Joi.binary(),
        // createdOn: Joi.date().required(),
        deadline: Joi.date().required(),
    })
}

module.exports = {
    createTaskValidation
}