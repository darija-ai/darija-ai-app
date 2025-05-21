import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../../../modules/landing/index'

export const Route = createFileRoute('/_layout/(public)/')({
  component: LandingPage,
})


