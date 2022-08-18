import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({   
    name : {
        type: String,
        required: [true, 'Please provide the name of the apartment'],
        lowercase: true,
        trim: true,
    }, 
    street : {
        type: String,
        required: [true, 'Please provide the name of the street'],
        lowercase: true,
        trim: true,
    }, 
    zipCode : {
        type: String,
        required: [true, 'Please provide the zip code'],
        trim: true,
    }, 
    city : {
        type: String,
        required: [true, 'Please provide the city'],
        lowercase: true,
        trim: true,
    }
});

export default mongoose.model('Apartment', ApartmentSchema);