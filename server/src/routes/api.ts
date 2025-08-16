import { Router } from 'express';
import { authRoutes } from '../modules/auth';
import { usersRoutes } from '../modules/users';
import { annotationRoutes } from '../modules/annotations';

const apiRouter = Router();

apiRouter.use('/auth', authRoutes);
apiRouter.use('/users', usersRoutes);
apiRouter.use('/annotation', annotationRoutes);

export default apiRouter;