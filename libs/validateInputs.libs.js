const Joi = require('@hapi/joi')
const schemaRegister = Joi.object({
    username: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    phone: Joi.string().min(10).max(11).required(),
    address: Joi.string().min(6).max(1024).required(),
    password: Joi.string().min(6).max(1024).required(),
    id_role: Joi.number()
})

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
})


exports.schemaRegister = schemaRegister
exports.schemaLogin = schemaLogin