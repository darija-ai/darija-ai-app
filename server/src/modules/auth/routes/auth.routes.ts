import { Router } from 'express';
import authController from '../controllers/auth.controller';
import { SignupSchema, LoginSchema } from '../schemas/auth.schema';

const authRouter = Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);

export default authRouter;