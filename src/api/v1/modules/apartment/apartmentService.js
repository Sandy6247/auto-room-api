import Apartment from "./models/apartmentModel.js";

export const readAll = async () => {
    const apartments = await Apartment.find();

    return apartments;
};

export const createOne = async (data) => {
    const { name, street, zipCode, city } = data;
    const apartment = new Apartment({   
        name, 
        street, 
        zipCode, 
        city 
    });
    const apartmentCreated = await apartment.save();

    return apartmentCreated;
};

export const readOneById = async (id) => {
    const apartmentById = await Apartment.findById(id);

    return apartmentById;
}

export const updateOneById = async (id, data) => {
    const { name, street, zipCode, city } = data;

    const apartmentUpdated = await Apartment.findByIdAndUpdate(id, data);

    return apartmentUpdated;
}

export const deleteOneById = async (id) => {
    const apartmentDeleted = await Apartment.findByIdAndDelete(id);

    return apartmentDeleted;
}
