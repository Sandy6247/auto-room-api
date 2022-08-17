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
    res.send('Read one user');
};

export const updateOneById = async (req, res) => {
    res.send('Uptade one user');
};

export const deleteOneById = async (req, res) => {
    res.send('Delete one user');
};