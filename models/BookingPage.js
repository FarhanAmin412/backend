import mongoose from 'mongoose';

const BookingDetailsStructure = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    doctorName: String,
    doctorPosition: String,
    doctorImage: String,
});


const BookingDetailsModel = mongoose.model('bookingDetailsModel',BookingDetailsStructure);

export default BookingDetailsModel;