import { Request, Response } from "express"
import { annotateAnnotation, createAnnotation, deleteAnnotation, rejectAnnotation, superviseAnnotation } from "../logic/annotation.service";

export const createAnnotationController = async (req: any, res: Response): Promise<any> => {
    try {
        const annotationData = req.body;
        const user = req.user;

        const annotation = await createAnnotation(annotationData, user.userId);

        return res.status(200).json({
            message: 'Annotation created succesfully',
            success: true,
            data: annotation
        })
    } catch (error) {
        console.error('Error creating annotation: ', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}

export const annotateAnnotationController = async (req: any, res: Response): Promise<any> => {
    try {
        const userId = req.user.userId;
        const annotationId = req.params.id;
        const annotationText = req.body;

        const annotation = await annotateAnnotation(userId, annotationId, annotationText.text);

        return res.status(200).json({
            message: 'Annotated successfully',
            success: true,
            data: annotation
        })
    } catch (error) {
        console.error('Error annotating', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}

export const superviseAnnotationController = async (req: any, res: Response): Promise<any> => {
    try {
        const userId = req.user.userId;
        const annotationId = req.params.id;
        const annotationText = req.body;

        const annotation = await superviseAnnotation(userId, annotationId, annotationText.text);

        return res.status(200).json({
            message: 'Supervised successfully',
            success: true,
            data: annotation
        })
    } catch (error) {
        console.error('Error supervising', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}

export const rejectAnnotationController = async (req: any, res: Response): Promise<any> => {
    try {
        const userId = req.user.userId;
        const annotationId = req.params.id;

        const annotation = await rejectAnnotation(userId, annotationId);

        return res.status(200).json({
            message: 'Rejected successfully',
            success: true,
            data: annotation
        })
    } catch (error) {
        console.error('Error rejecting annotation', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}

export const deleteAnnotationController = async (req: any, res: Response): Promise<any> => {
    try {
        const annotationId = req.params.id;

        const annotation = await deleteAnnotation(annotationId);

        return res.status(200).json({
            message: 'Deleted successfully',
            success: true,
            data: annotation
        })
    } catch (error) {
        console.error('Error deleting annotation', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}