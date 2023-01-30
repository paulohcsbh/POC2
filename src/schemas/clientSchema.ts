import Joi from "joi";

export const clientSchema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    email: Joi.string().required()
})