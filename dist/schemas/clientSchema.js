import Joi from "joi";
export var clientSchema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    email: Joi.string().required()
});
