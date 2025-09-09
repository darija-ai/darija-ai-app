import { Router } from 'express';
import authRouter from './auth.routes';
import annotationRouter from './annotation.router';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/annotation', annotationRouter);

export default apiRouter;

apiRouter.get("/test", (req, res) => {
    res.send("this endpoint works")
})