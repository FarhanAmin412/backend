import BookingDetailsModel from "../models/BookingPage.js";

export const AddUser = async (req , res) => {
    const firstName = req.body.RecipientFirstName.toString();
    const lastName = req.body.RecipientLastName.toString();
    const email = req.body.RecipientEmail.toString();
    const doctorName = req.body.DoctorName.toString();
    const doctorPosition = req.body.DoctorPosition.toString();
    const doctorImage = req.body.DoctorImage.toString();
    
    const newBooking = new BookingDetailsModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        doctorName: doctorName,
        doctorPosition: doctorPosition,
        doctorImage: doctorImage
    });

    try {
        await newBooking.save();
        res.json(newBooking);

    } catch (error) {
        console.log("Not Saved ....");
    }
}

export const GetUsers = async (req , res) => {
    try {
        const allBookings = await BookingDetailsModel.find();
        res.json(allBookings);
    } catch (error) {
        console.log("No Record Found...")
    }
}

export const DeleteUser = async(req,res) => {
        try {
            const deleteRecord = await BookingDetailsModel.findByIdAndDelete(req.params.id);
            res.json(deleteRecord);
            console.log(`Successfully Deleted : ${req.params.id}`);
        } catch (error) {
            console.log("Error!!!");
        }           
}

export const UpdateUser = async(req,res) => {
    try {
        const updateRecord = await BookingDetailsModel.findByIdAndUpdate(req.params.id,req.body);
        res.json(updateRecord);
        console.log(`Successfully Updated Id = ${req.params.id}`);
    } catch (error) {
        console.log("Not Updated!!!!!");
    }
}