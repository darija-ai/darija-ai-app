import { Request, Response } from "express"
import { createAnnotation } from "../services/annotation.service";



export const createAnnotationController = async (req: any, res: Response): Promise<any> => {
    try {

        const annotationData = req.body;
        const user = req.user;

        console.log('ikram', user)

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