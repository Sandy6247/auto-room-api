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