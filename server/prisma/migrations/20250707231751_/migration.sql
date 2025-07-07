-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ANNOTATOR', 'SUPERVISOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "AnnotationType" AS ENUM ('SPEECH_TO_TEXT', 'ENGLISH_TO_ARABIC', 'ARABIC_TO_DARIJA');

-- CreateEnum
CREATE TYPE "AnnotationStatus" AS ENUM ('PENDING', 'ANNOTATED', 'CONFIRMED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ENGLISH', 'ARABIC', 'DARIJA');

-- CreateTable
CREATE TABLE "user" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "email" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "role" "UserRole" NOT NULL DEFAULT 'ANNOTATOR',
    "minutes" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "words" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "annotation" (
    "id" TEXT NOT NULL,
    "originalText" TEXT,
    "outputText" TEXT NOT NULL,
    "annotatedText" TEXT,
    "posterId" TEXT NOT NULL,
    "annotatorId" TEXT NOT NULL,
    "annotationType" "AnnotationType" NOT NULL,
    "status" "AnnotationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "annotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpeechToText" (
    "id" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "annotationId" TEXT NOT NULL,

    CONSTRAINT "SpeechToText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TextToText" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "annotationId" TEXT NOT NULL,
    "originalLanguage" "Language" NOT NULL,
    "translationLanguage" "Language" NOT NULL,

    CONSTRAINT "TextToText_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "annotation" ADD CONSTRAINT "annotation_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "annotation" ADD CONSTRAINT "annotation_annotatorId_fkey" FOREIGN KEY ("annotatorId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeechToText" ADD CONSTRAINT "SpeechToText_annotationId_fkey" FOREIGN KEY ("annotationId") REFERENCES "annotation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TextToText" ADD CONSTRAINT "TextToText_annotationId_fkey" FOREIGN KEY ("annotationId") REFERENCES "annotation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
