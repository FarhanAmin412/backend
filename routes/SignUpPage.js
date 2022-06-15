import express from 'express';
import { AddUser, DeleteUser, GetUsers } from '../controllers/LoginPage.js';

const router = express.Router();

router.get("/",GetUsers);

router.post("/",AddUser);

router.delete("/:id",DeleteUser);

export default router; 