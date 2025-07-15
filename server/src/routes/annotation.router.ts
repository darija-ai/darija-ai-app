import { Router } from 'express';
import { requireAuth } from "../middlewares/auth.middleware";
import { annotateAnnotationController, createAnnotationController, deleteAnnotationController, rejectAnnotationController, superviseAnnotationController } from '../controllers/annotation.controller';

const annotationRouter = Router();

annotationRouter.post(
    '/',
    requireAuth,
    createAnnotationController
)

annotationRouter.put(
    '/annotate/:id',
    requireAuth,
    annotateAnnotationController
)

annotationRouter.put(
    '/supervise/:id',
    requireAuth,
    superviseAnnotationController
)

annotationRouter.put(
    '/reject/:id',
    requireAuth,
    rejectAnnotationController
)

annotationRouter.delete(
    '/:id',
    requireAuth,
    deleteAnnotationController
)

export default annotationRouter;