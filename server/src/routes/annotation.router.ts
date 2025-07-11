import { Router } from 'express';
import { requireAuth } from "../middlewares/auth.middleware";
import { createAnnotationController } from '../controllers/annotation.controller';

const annotationRouter = Router();

annotationRouter.post(
    '/',
    requireAuth,
    createAnnotationController
)

export default annotationRouter;