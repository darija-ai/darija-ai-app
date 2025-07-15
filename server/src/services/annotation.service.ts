import prisma from "../prisma/client"

export const createAnnotation = async (annotationData: any, userId: string) => {

    if (annotationData.annotationType === 'SPEECH_TO_TEXT') {
        return await prisma.annotation.create({
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
        })
    }
    else if (annotationData.annotationType === 'ENGLISH_TO_ARABIC' || annotationData.annotationType === 'ARABIC_TO_DARIJA') {
        return await prisma.annotation.create({
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
        })
    }
}

export const annotateAnnotation = async (userId: string, annotationId: string, text: string) => {

    return await prisma.annotation.update({
        where: { id: annotationId },
        data: {
            annotatedText: text,
            annotatorId: userId,
            status: 'ANNOTATED'
        }
    })
}

export const superviseAnnotation = async (userId: string, annotationId: string, text: string) => {

    return await prisma.annotation.update({
        where: { id: annotationId },
        data: {
            annotatedText: text,
            supervisorId: userId,
            status: 'CONFIRMED'
        }
    })
}

export const rejectAnnotation = async (userId: string, annotationId: string) => {
    return await prisma.annotation.update({
        where: { id: annotationId },
        data: {
            status: 'REJECTED',
            supervisorId: userId,
        }
    })
}

export const deleteAnnotation = async (annotationId: string) => {
    return await prisma.annotation.delete({
        where: { id: annotationId }
    })
}