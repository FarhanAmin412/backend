import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import LoginPage from './routes/BookingPage.js';
import SignUpPage from './routes/SignUpPage.js'

const url = "mongodb+srv://Farhan:makemehappy007@newdb.gxlu3.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("Connected to Database."));

app.listen(5000);

app.use(cors());

app.use(bodyParser.json({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

app.use("/Doctors",LoginPage);

app.use("/Bookmepage",LoginPage);

app.use("/TestUpdate",LoginPage);

app.use("/SignUp",SignUpPage);
