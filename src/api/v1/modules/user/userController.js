import * as userService from './userService.js';
import createUserDTO from './dto/user.create.dto.js';
import catchAsync from '../../../../lib/catchAsync.js';
import HttpException from '../../../../lib/httpException.js';
import { HttpStatus } from '../../../../config/constants/index.js';

export const createOne = catchAsync(async (req, res) => {
    const data = req.body;
    const { email } = req.body;
    console.log(email);

    const validatorSchema = createUserDTO(req.body);
    if (validatorSchema.error) {
        throw new HttpException(validatorSchema.error.details[0].message, HttpStatus.BAD_REQUEST);  
    };

    const userExist = await userService.readOne({ email });
    if (userExist) {
        throw new HttpException('email already existe', HttpStatus.BAD_REQUEST);
    }

    const userCreated = await userService.createOne(data);
    if (!userCreated) {
        throw new HttpException('error during account saving', HttpStatus.BAD_REQUEST);
    }

    return res.status(201).json(userCreated);
});

export const readAll = async (req, res) => {    
    const users = await userService.readAll(); 

    return res.status(200).json(users);
};

export const readOneById = catchAsync( async (req, res) => {
    const { id } = req.params;
    const userFound = await userService.readOneById(id); 
    if (!userFound) {
        throw new HttpException('error invalid user ID', HttpStatus.BAD_REQUEST);
    }

    return res.status(200).json(userFound);
});

export const updateOneById = async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const userUpdated = await userService.updateOneById(id, data); 

    return res.status(200).json(userUpdated);
};

export const deleteOneById = async (req, res) => {
    const { id } = req.params;
    const userDeleted = await userService.deleteOneById(id);

    return res.status(200).json(userDeleted);
};

