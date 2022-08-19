import User from "./models/UserModel.js";

export const readAll = async () => {
    const users = await User.find();

    return users;
};

export const createOne = async (data) => {
    const {firstName, lastName, email, password, phone, birthDate, nationality} = data;
    const user = new User({
        firstName, 
        lastName, 
        email, 
        password, 
        phone,
        birthDate, 
        nationality
    });
    const userCreated = await user.save();

    return userCreated;
};

export const readOneById = async (id) => {
    const userById = await User.findById(id);

    return userById;
};

export const readOne = async (data, selectedFields = null) => {
    const userFound = await User.findOne(data).select(selectedFields);

    return userFound;
};

export const updateOneById = async (id, data) => {
    const userUpdated = await User.findByIdAndUpdate(id, data);

    return userUpdated;
}

export const deleteOneById = async (id) => {
    const userDeleted = await User.findByIdAndDelete(id);

    return userDeleted;
}
