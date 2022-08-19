import Joi from "joi";

const createRoomDTO = (data) => {
    const schema = Joi.object({
        number: Joi.number()
            .required(),

        area: Joi.number()
            .required(),     
        
        price: Joi.number()
            .required(),

        apartment: Joi.string()
            .required(),

    });

    return schema.validate(data);

};

export default createRoomDTO;