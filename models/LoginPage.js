import mongoose from 'mongoose';

const signUpDetailsStructure = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
});


const signUpDetailsModel = mongoose.model('loginDetailsModel',signUpDetailsStructure);

export default signUpDetailsModel;