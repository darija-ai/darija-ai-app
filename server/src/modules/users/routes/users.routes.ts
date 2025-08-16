import { Router } from 'express';
import usersController from '../controllers/users.controller';
import { requireAuth } from '../../../shared/middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.get('/me', requireAuth, usersController.getCurrentUser);
usersRouter.get('/:userId', requireAuth, usersController.getUserById);
usersRouter.put('/profile', requireAuth, usersController.updateUserProfile);

export default usersRouter;