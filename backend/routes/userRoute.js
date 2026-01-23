import express from 'express';
import { registeredUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registeredUser);

export default userRouter;