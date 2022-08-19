import mongoose from "mongoose";
//import Apartment from "../../apartment/models/apartmentModel.js"

const Schema = mongoose.Schema;


const RoomSchema = new Schema({
    number: {
        type: Number,
        required: [true, 'Please provide the number of rooms'],
        get: v => Math.round(v),
        set: v => Math.round(v),
        alias: 'i',
        trim: true,
    },
    area: {
        type: Number,
        required: [true, 'Please provide the area of the room'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Please provide the price of the room'],
        get: v => Math.round(v),
        set: v => Math.round(v),
        alias: 'i',
        trim: true,
    },
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
    },

})

export default mongoose.model('Room', RoomSchema);
