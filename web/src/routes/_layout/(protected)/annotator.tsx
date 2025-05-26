import { createFileRoute } from '@tanstack/react-router'

import AnnotatorPage from '../../../modules/speech-to-text'


export const Route = createFileRoute('/_layout/(protected)/annotator')({
  component: AnnotatorPage,
})

