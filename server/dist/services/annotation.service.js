"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnnotation = exports.rejectAnnotation = exports.superviseAnnotation = exports.annotateAnnotation = exports.createAnnotation = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const createAnnotation = async (annotationData, userId) => {
    if (annotationData.annotationType === 'SPEECH_TO_TEXT') {
        return await client_1.default.annotation.create({
            data: {
                outputText: annotationData.output,
                posterId: userId,
                annotationType: 'SPEECH_TO_TEXT',
                SpeechToText: {
                    create: {
                        audioUrl: annotationData.url,
                    },
                }
            },
            include: {
                SpeechToText: true,
            }
        });
    }
    else if (annotationData.annotationType === 'ENGLISH_TO_ARABIC' || annotationData.annotationType === 'ARABIC_TO_DARIJA') {
        return await client_1.default.annotation.create({
            data: {
                outputText: annotationData.output,
                posterId: userId,
                annotationType: annotationData.annotationType === 'ENGLISH_TO_ARABIC' ? 'ENGLISH_TO_ARABIC' : 'ARABIC_TO_DARIJA',
                TextToText: {
                    create: {
                        text: annotationData.text,
                        originalLanguage: annotationData.annotationType === 'ENGLISH_TO_ARABIC' ? 'ENGLISH' : 'ARABIC',
                        translationLanguage: annotationData.annotationType === 'ENGLISH_TO_ARABIC' ? 'ARABIC' : 'DARIJA',
                    },
                },
            },
            include: {
                TextToText: true,
            }
        });
    }
};
exports.createAnnotation = createAnnotation;
const annotateAnnotation = async (userId, annotationId, text) => {
    return await client_1.default.annotation.update({
        where: { id: annotationId },
        data: {
            annotatedText: text,
            annotatorId: userId,
            status: 'ANNOTATED'
        }
    });
};
exports.annotateAnnotation = annotateAnnotation;
const superviseAnnotation = async (userId, annotationId, text) => {
    return await client_1.default.annotation.update({
        where: { id: annotationId },
        data: {
            annotatedText: text,
            supervisorId: userId,
            status: 'CONFIRMED'
        }
    });
};
exports.superviseAnnotation = superviseAnnotation;
const rejectAnnotation = async (userId, annotationId) => {
    return await client_1.default.annotation.update({
        where: { id: annotationId },
        data: {
            status: 'REJECTED',
            supervisorId: userId,
        }
    });
};
exports.rejectAnnotation = rejectAnnotation;
const deleteAnnotation = async (annotationId) => {
    return await client_1.default.annotation.delete({
        where: { id: annotationId }
    });
};
exports.deleteAnnotation = deleteAnnotation;
