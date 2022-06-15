import express from 'express';
import { AddUser, DeleteUser, GetUsers, UpdateUser } from '../controllers/BookingPage.js';

const router = express.Router();

router.get("/",GetUsers);

router.post("/",AddUser);

router.delete("/:id",DeleteUser);

router.put("/:id",UpdateUser);

export default router; 