import Room from "./models/RoomModel.js";

export const readAll = async () => {
    const rooms = await Room.find();

    return rooms;
};

export const createOne = async (data) => {
    const { number, area, price } = data;
    const room = new Room({
        number,
        area,
        price
    });
    const roomCreated = await room.save();

    return roomCreated;
};

export const readOneById = async (id) => {
    const roomById = await Room.findById(id);

    return roomById;
}

export const updateOneById = async (id, data) => {
    const { number, area, price } = data;
    const roomUpdated = await Room.findByIdAndUpdate(id, data);

    return roomUpdated;
}

export const deleteOneById = async (id) => {
    const roomDeleted = await Room.findByIdAndDelete(id);

    return roomDeleted;
}