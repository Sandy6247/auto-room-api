import mongoose from "mongoose";

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName : {
        type: String,
        minlength: 2,
        maxlength: 40,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide your name'],
    },
    lastName : {
        type: String,
        minlength: 2,
        maxlength: 40,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide your last name'],
    },
    email : {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: true
    },
    password : {
        type: String,
        minlength: 8,
        maxlength: 256,
        required: [true, 'Please provide your password'],
        select: false,
    },
    phone : {
        type: String,
        select: false,
    },
    birthDate : {
        type: String,
        select: false,
    },    
    nationality : {      
        type: String,
        select: false,
    }
});

export default mongoose.model('User', UserSchema);