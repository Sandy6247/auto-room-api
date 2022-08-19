import Room from "./models/RoomModel.js";

export const readAll = async () => {
    const rooms = await Room.find()
                            .populate("apartment");

    return rooms;
};

export const createOne = async (data) => {
    const { number, area, price, apartment } = data;
    const room = new Room({
        number,
        area,
        price,
        apartment,
    });
    const inApart = Room.find()
                        .populate("apartment");
    const roomCreated = await room.save();

    return roomCreated, inApart;
};

export const readOneById = async (id) => {
    const roomById = await Room.findById(id)
                               .populate("apartment");

    return roomById;
}

export const updateOneById = async (id, data) => {
    const roomUpdated = await Room.findByIdAndUpdate(id, data);

    return roomUpdated;
}

export const deleteOneById = async (id) => {
    const roomDeleted = await Room.findByIdAndDelete(id);

    return roomDeleted;
}