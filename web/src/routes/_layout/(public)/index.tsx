import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../../../features/landing/index'

export const Route = createFileRoute('/_layout/(public)/')({
  component: LandingPage,
})


