import signUpDetailsModel from '../models/LoginPage.js';

export const AddUser = async (req , res) => {
    const firstName = req.body.firstName.toString();
    const lastName = req.body.lastName.toString();
    const email = req.body.email.toString();
    const password = req.body.password.toString();
    const confirmPassword = req.body.confirmPassword.toString();
    
    const newLogin = new signUpDetailsModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    });

    try {
        await newLogin.save();
        res.json(newLogin);

    } catch (error) {
        console.log("Not Saved ....");
    }
}

export const GetUsers = async (req , res) => {
    try {
        const allLogins = await signUpDetailsModel.find();
        res.json(allLogins);
    } catch (error) {
        console.log("No Record Found...")
    }
}

export const DeleteUser = async(req,res) => {
        try {
            const deleteRecord = await signUpDetailsModel.findByIdAndDelete(req.params.id);
            res.json(deleteRecord);
            console.log(`Successfully Deleted : ${req.params.id}`);
        } catch (error) {
            console.log("Error!!!");
        }           
}