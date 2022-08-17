import * as userService from './userService.js';
import createUserDTO from './dto/user.create.dto.js';

export const createOne = async (req, res) => {
    const data = req.body;

    const validatorSchema = createUserDTO(req.body);
    if (validatorSchema.error) {

        return res.status(400).json(validatorSchema.error.details[0].message);        
    };

    const userCreated = await userService.createOne(data);
    
    return res.status(201).json(userCreated);
};

export const readAll = async (req, res) => {    
    const users = await userService.readAll(); 

    return res.status(200).json(users);
};

export const readOneById = async (req, res) => {
    const id = req.params.id;
    const userById = await userService.readOneById(id); 

    return res.status(200).json(userById);
};

export const updateOneById = async (req, res) => {
    // const id = parseInt(req.params.id);
    // const userUpdated = await userService.updateOneById(id); 

    // return res.status(200).json(userUpdated);
    res.send('Uptade one user');
};

export const deleteOneById = async (req, res) => {
    res.send('Delete one user');
};