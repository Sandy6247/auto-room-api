import * as apartmentService from "./apartmentService.js";

export const createOne = async (req, res) => {
    const data = req.body;

    const apartmentCreated = await apartmentService.createOne(data);

    return res.status(201).json(apartmentCreated);
};

export const readAll = async (req, res) => {
    const apartments = await apartmentService.readAll();

    return res.status(200).json(apartments);
};

export const readOneById = async (req, res) => {
    const id = req.params.id;

    const apartmentById = await apartmentService.readOneById(id);

    return res.status(200).json(apartmentById);
};

export const updateOneById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const apartmentUpdated = await apartmentService.updateOneById(id, data);

    return res.status(200).json(apartmentUpdated);
};

export const deleteOneById = async (req, res) => {
    const id = req.params.id;

    const apartmentDeleted = await apartmentService.deleteOneById(id);

    return res.status(200).json(apartmentDeleted);
};