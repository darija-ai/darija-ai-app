import { Router } from 'express';
import authController from '../controllers/auth.controller';
import { SignupSchema, LoginSchema } from '../schemas/auth.schema';
import { requireAuth } from '../middlewares/auth.middleware';

const authRouter = Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/me', requireAuth, authController.getCurrentUser);

/*
==========This is an example of how to implement verifyRole middleware==========
authRouter.get(
  '/admin-dashboard',
  authenticate,
  verifyRole([UserRole.ADMIN]),             
  (req, res) => {
    res.status(200).json({ message: 'Admin access granted' });
  }
);

*/

export default authRouter;