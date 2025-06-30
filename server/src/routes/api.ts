import { Router } from 'express';
import authRouter from '../modules/auth/routes/auth.routes';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);

export default apiRouter;