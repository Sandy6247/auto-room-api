import * as roomService from "./roomService.js";

export const readAll = async (req, res) => {
    const rooms = await roomService.readAll();

    return res.status(200).json(rooms);
};

export const createOne = async (req, res) => {
    const data = req.body;

    const roomCreated = await roomService.createOne(data);

    return res.status(201).json(roomCreated);
};

export const readOneById = async (req, res) => {
    const id = req.params.id;

    const roomById = await roomService.readOneById(id);

    return res.status(200).json(roomById);
};

export const updateOneById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const roomUpdated = await roomService.updateOneById(id, data);

    return res.status(200).json(roomUpdated);
};

export const deleteOneById = async (req, res) => {
    const id = req.params.id;

    const roomDeleted = await roomService.deleteOneById(id);

    return res.status(200).json(roomDeleted);
};