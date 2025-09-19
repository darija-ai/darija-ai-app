import { Router } from 'express';
import authRouter from './auth/routing/auth.routes';
import annotationRouter from './annotation/routing/annotation.router';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/annotation', annotationRouter);

export default apiRouter;