import Joi from "joi";

const createUserDTO = (data) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .alphanum()
            .min(2)
            .max(40),

        lastName: Joi.string()
            .alphanum()
            .min(2)
            .max(60),     
        
        email: Joi.string()
            .email()
            .required(),

        password: Joi.string()
            .min(8)
            .max(256)
            .required(),
    });

    return schema.validate(data);

};

export default createUserDTO;