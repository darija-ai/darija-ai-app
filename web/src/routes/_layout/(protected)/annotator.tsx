import { createFileRoute } from '@tanstack/react-router'

import AnnotatorPage from '../../../modules/annotator'


export const Route = createFileRoute('/_layout/(protected)/annotator')({
  component: AnnotatorPage,
})

