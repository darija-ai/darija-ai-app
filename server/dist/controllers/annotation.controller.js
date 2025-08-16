"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnnotationController = exports.rejectAnnotationController = exports.superviseAnnotationController = exports.annotateAnnotationController = exports.createAnnotationController = void 0;
const annotation_service_1 = require("../services/annotation.service");
const createAnnotationController = async (req, res) => {
    try {
        const annotationData = req.body;
        const user = req.user;
        const annotation = await (0, annotation_service_1.createAnnotation)(annotationData, user.userId);
        return res.status(200).json({
            message: 'Annotation created succesfully',
            success: true,
            data: annotation
        });
    }
    catch (error) {
        console.error('Error creating annotation: ', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
exports.createAnnotationController = createAnnotationController;
const annotateAnnotationController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const annotationId = req.params.id;
        const annotationText = req.body;
        const annotation = await (0, annotation_service_1.annotateAnnotation)(userId, annotationId, annotationText.text);
        return res.status(200).json({
            message: 'Annotated successfully',
            success: true,
            data: annotation
        });
    }
    catch (error) {
        console.error('Error annotating', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
exports.annotateAnnotationController = annotateAnnotationController;
const superviseAnnotationController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const annotationId = req.params.id;
        const annotationText = req.body;
        const annotation = await (0, annotation_service_1.superviseAnnotation)(userId, annotationId, annotationText.text);
        return res.status(200).json({
            message: 'Supervised successfully',
            success: true,
            data: annotation
        });
    }
    catch (error) {
        console.error('Error supervising', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
exports.superviseAnnotationController = superviseAnnotationController;
const rejectAnnotationController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const annotationId = req.params.id;
        const annotation = await (0, annotation_service_1.rejectAnnotation)(userId, annotationId);
        return res.status(200).json({
            message: 'Rejected successfully',
            success: true,
            data: annotation
        });
    }
    catch (error) {
        console.error('Error rejecting annotation', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
exports.rejectAnnotationController = rejectAnnotationController;
const deleteAnnotationController = async (req, res) => {
    try {
        const annotationId = req.params.id;
        const annotation = await (0, annotation_service_1.deleteAnnotation)(annotationId);
        return res.status(200).json({
            message: 'Deleted successfully',
            success: true,
            data: annotation
        });
    }
    catch (error) {
        console.error('Error deleting annotation', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
exports.deleteAnnotationController = deleteAnnotationController;
