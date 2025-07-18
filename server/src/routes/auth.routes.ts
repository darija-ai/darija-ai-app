import { Router } from 'express';
import authController from '../controllers/auth.controller';
import { SignupSchema, LoginSchema } from '../schemas/auth.schema';
import { requireAuth } from '../middlewares/auth.middleware';

const authRouter = Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/me', requireAuth, authController.getCurrentUser);

export default authRouter;
